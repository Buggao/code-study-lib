import { useState } from "react"

export default function Game() {
  // 优化1：简化历史数据结构，避免存储复杂对象
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), move: null }]);
  const [currentMove, setCurrentMove] = useState(0);
  const [orderType, setOrderType] = useState("asc"); // 改为 "asc"/"desc" 枚举值

  const currentState = history[currentMove];
  const currentSquares = currentState.squares;
  const xIsNext = currentMove % 2 === 0;

  // 优化2：提取计算函数，减少重复代码
  const winnerInfo = calculateWinner(currentSquares);
  const isGameEnded = winnerInfo && winnerInfo.winner !== "tie";
  
  // 优化3：简化状态更新逻辑
  const handlePlay = (nextSquares, move) => {
    if (isGameEnded) return;
    
    const nextHistory = history.slice(0, currentMove + 1);
    nextHistory.push({ squares: nextSquares, move });
    
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // 优化4：简化跳转函数
  const jumpTo = (index) => {
    setCurrentMove(index);
  }

  // 优化5：提取状态文本生成逻辑
  const status = getStatusText(winnerInfo, xIsNext);
  
  // 优化6：简化历史记录处理
  const displayedHistory = orderType === "asc" ? history : [...history].reverse();
  
  // 优化7：减少movesList中的重复计算
  const movesList = displayedHistory.map((step, displayIndex) => {
    const actualMove = orderType === "asc" 
      ? displayIndex 
      : history.length - 1 - displayIndex;
    
    return (
      <li key={actualMove}>
        <button onClick={() => jumpTo(actualMove)}>
          {getMoveDescription(step, actualMove)}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          isGameEnded={isGameEnded}
          winningSquares={winnerInfo?.configuration || []}
        />
        <div>{status}</div>
      </div>
      <div className="game-info">
        <button onClick={() => setOrderType(orderType === "asc" ? "desc" : "asc")}>
          {orderType === "asc" ? "升序" : "降序"}
        </button>
        <ol>{movesList}</ol>
      </div>
    </div>
  );
}

// 优化8：提取辅助函数
function getStatusText(winnerInfo, xIsNext) {
  if (winnerInfo) {
    return winnerInfo.winner === "tie" 
      ? "Result: 平局" 
      : `Winner: ${winnerInfo.winner}`;
  }
  return `Next player: ${xIsNext ? "X" : "O"}`;
}

function getMoveDescription(step, moveIndex) {
  if (moveIndex === 0) return "Go to game start";
  
  if (!step.move) return `Go to move #${moveIndex}`;
  
  const { row, col } = step.move;
  return `Go to move #${moveIndex} (${row + 1}, ${col + 1})`;
}

export function Board({ xIsNext, squares, onPlay, isGameEnded, winningSquares = [] }) {
  // 优化9：简化棋盘渲染逻辑
  const renderSquare = (row, col) => {
    const idx = row * 3 + col;
    const isWinning = winningSquares.includes(idx);
    
    return (
      <Square
        key={idx}
        value={squares[idx]}
        onSquareClick={() => handleSquareClick(row, col)}
        isWinning={isWinning}
      />
    );
  };

  const handleSquareClick = (row, col) => {
    const idx = row * 3 + col;
    
    if (isGameEnded || squares[idx]) return;
    
    const nextSquares = squares.slice();
    nextSquares[idx] = xIsNext ? "X" : "O";
    
    onPlay(nextSquares, { row, col });
  };

  // 优化10：使用更简洁的棋盘生成方式
  return (
    <main>
      {[0, 1, 2].map(row => (
        <div className="board-row" key={row}>
          {[0, 1, 2].map(col => renderSquare(row, col))}
        </div>
      ))}
    </main>
  );
}

export function Square({ value, onSquareClick, isWinning = false }) {
  const className = isWinning ? "square winning" : "square";
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}

// 优化11：简化胜者计算逻辑
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // 行
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // 列
    [0, 4, 8], [2, 4, 6]             // 对角线
  ];

  // 检查是否有胜者
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        configuration: [a, b, c]
      };
    }
  }

  // 检查是否平局
  const isTie = squares.every(square => square !== null);
  return isTie ? { winner: "tie", configuration: [] } : null;
}