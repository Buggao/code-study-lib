import { useState } from "react"

export default function Game()  {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0)
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const [orderType, setOrderType] = useState("升序")
  const handlePlay = (nextSquares, row, col) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpTo = (index) => {
    setCurrentMove(index);
    setHistory([...history.slice(0, index + 1)]);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const changeOrderType = () => {
    console.log("histroy is", history)
    const nextHistory = [...history].reverse();
    console.log(nextHistory)
    setHistory(nextHistory);
    setOrderType( orderType === "升序" ? "降序" : "升序")
  }
  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <button onClick={ changeOrderType }>{orderType}</button>
          <ol> {moves} </ol>
        </div>
      </div>
    </>
  )
}

// 重写 Board 以使用两个循环来制作方块而不是对它们进行硬编码。
// 添加一个切换按钮，使可以按升序或降序对落子的步数进行排序。
// 当有人获胜时，突出显示致使获胜的三个方块（当没有人获胜时，显示一条关于结果为平局的消息）。
// 在“落子”的历史列表中以 (row, col) 格式显示每步的位置。


export function Board({xIsNext, squares, onPlay}) {
  // 变量提升到父级
  function onSquareClick(row, col) {
    const point = row * 3 + col + 1
    if( winner || squares[point]) return
    // 对数组进行浅拷贝 避免修改原来数据（虽然只能处理基本数据）, 为什么要浅拷贝？
    /**
     * 浅拷贝进行不变性处理
     * 好处有:
     * - 不变性使复杂的功能更容易实现。
     * - 当父组件的state变化后 子组件都会渲染（这是需要避免的部分）
     * -- react渲染规则：
     *      1. 组件调用自身setState 一定会重新执行render
     *      2. 父组件执行render -- 所有的子组件都会render
     *      3. 与props、是否可变更新无关
     *   如果进行浅拷贝，就可以使用react所提供的优化手段来避免这点
     * 
     * 在当前例子中，知识为了存储棋盘的histroy状态，方便以后制作悔棋的功能
     * */ 
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[point] = "X";
    } else {
      nextSquares[point] = "O"
    }
    onPlay(nextSquares, row, col);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  // React 组件必须返回单个 JSX 元素
        
  // 为什么不能写成onSquareClick={onSquareClick(1)} 的形式？
  return (
    <>
      <main>
        {
          [0, 1, 2].map(row => (
            <div className="board-row" key={row}>
              {
                [0, 1, 2].map(col => {
                  const value = row * 3 + col + 1
                  return <Square key={col} value={squares[value]} onSquareClick={() => onSquareClick(row, col)}/>
                })
              }
            </div>
          ))
        }
      </main>
      <div>{status}</div>
    </>
  );
}

export function Square({value, onSquareClick}) {
  // 因为
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // 如果对应的三个点都为 同一个 X 或 O 就返回对应的块 宣布胜利 使用for循环也是为了如此吧，可以提前return
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}