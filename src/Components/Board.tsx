import React, { FC, useState } from "react";
import Square from "./Square";

interface TitleProps {
  title: string;
  subtitle?: string;
}

const Board: FC<TitleProps> = ({ title, subtitle }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random()) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState(null);

  function setSquareValue(index: any) {
    const newData = squares.map((val, i) => {
      if (i === index) return currentPlayer;
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  return (
    <div>
      <p>Hey {currentPlayer}, it's your turn</p>
      <div className="grid grid-cols-3 gap-2 max-w-xl">
        {squares.map((_, i) => (
          <Square
            winner={winner}
            key={i}
            onClick={() => setSquareValue(i)}
            value={squares[i]}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
