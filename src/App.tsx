import React from "react";
import Title from "./Components/Title";
import Board from "./Components/Board";

function App() {
  return (
    <div className="App">
      <Title title="Tic-tac-toe" subtitle="Click an empty box to start" />
      <Board title="Board" />
    </div>
  );
}

export default App;
