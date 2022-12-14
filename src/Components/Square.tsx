import React, { FC } from "react";
import { Player } from "../Constants/index";

interface SquareProps {
  onClick?: () => void;
  value?: Player;
  winner?: Player;
  index?: number;
}

const Square: FC<SquareProps> = ({ onClick, value, winner }) => {
  if (!value)
    return (
      <button
        disabled={Boolean(winner)}
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-40 disabled disabled:bg-gray-300"
      />
    );
  return (
    <button
      className={`text-white font-bold py-2 px-4 rounded h-40 text-8xl ${
        value === "X"
          ? "bg-blue-500 hover:bg-blue-700"
          : "bg-red-500 hover:bg-red-700"
      }`}
      disabled
    >
      {value}
    </button>
  );
};

export default Square;
