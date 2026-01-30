import { useState } from "react"

export default function Board() {
  // 变量提升到父级
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [XIsNext, setXIsNext] = useState(true)
  function onSquareClick(i) {
    if(squares[i]) return
    // 对数组进行浅拷贝 避免修改原来数据（虽然只能处理基本数据）, 为什么要浅拷贝？
    /**
     * 浅拷贝进行不变性处理
     * 好处有:
     * - 不变性使复杂的功能更容易实现。
     * - 当父组件的state变化后 子组件都会渲染（尽管这是需要避免的部分）
     * */ 
    const nextSquares = squares.slice();
    if(XIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O"
    }
    setXIsNext(!XIsNext)
    setSquares(nextSquares);
  }
  // React 组件必须返回单个 JSX 元素
        
  // 为什么不能写成onSquareClick={onSquareClick(1)} 的形式？
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => onSquareClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => onSquareClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => onSquareClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => onSquareClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => onSquareClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => onSquareClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => onSquareClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => onSquareClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => onSquareClick(8)}/>
      </div>
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}