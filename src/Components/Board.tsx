import React, { FC, useEffect, useState } from "react";
import Title from "./Title";
import Square from "./Square";
import { Player } from "../Constants/index";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random()) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<Player>(null);

  useEffect(() => {
    const w = CalculateWinner(squares);
    if (w) {
      setWinner(w);
    }
    if (!w && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  }, [winner, squares]);

  function setSquareValue(index: number) {
    const newData = squares.map((val, i) => {
      if (i === index) return currentPlayer;
      return val;
    });
    !winner && setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setSquares(newData);
  }

  const Reset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const CalculateWinner = (squares: Player[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [2, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [1, 4, 7],
    ];

    for (let idx = 0; idx < lines.length; idx++) {
      const [a, b, c] = lines[idx];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <div className="space-y-4 m-4">
      <Title title="Tic-tac-toe" subtitle="Click an empty box to start" />
      {!winner && <p>Hey {currentPlayer}, it's your turn</p>}
      {winner && winner === "BOTH" && (
        <p>Congratulations you're both winners</p>
      )}
      {winner && winner !== "BOTH" && (
        <p>Congratulations {currentPlayer === "O" ? "X" : "O"}!</p>
      )}
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

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => Reset()}
        type="button"
      >
        Reset
      </button>
    </div>
  );
};

export default Board;
