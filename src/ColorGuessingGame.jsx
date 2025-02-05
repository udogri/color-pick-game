import React, { useState, useEffect } from "react";
import "./ColorGuessingGame.css";

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

const ColorGuessingGame = () => {
  const [targetColor, setTargetColor] = useState("");
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("Guess the correct color!");

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = (reset = false) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setTargetColor(randomColor);
    setGameStatus("Guess the correct color!");
    if (reset) setScore(0);
  };

  const handleGuess = (color) => {
    if (color === targetColor) {
      setGameStatus("Correct! 🎉");
      setScore((prevScore) => prevScore + 1);
      setTimeout(startNewGame, 1000);
    } else {
      setGameStatus("Wrong! Try again. ❌");
    }
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Color Game</h1>
      <h2 data-testid="gameInstructions">Guess the correct color!</h2>
      <div
        className="color-box"
        data-testid="colorBox"
        style={{ backgroundColor: targetColor }}
      ></div>
      <div className="color-options">
        {colors.map((color) => (
          <button
            key={color}
            data-testid="colorOption"
            className="color-button"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
            aria-label={`Select ${color}`}
          ></button>
        ))}
      </div>
      <p className="game-status" data-testid="gameStatus">{gameStatus}</p>
      <p className="score" data-testid="score">Score: {score}</p>
      <button
        className="new-game-button"
        data-testid="newGameButton"
        onClick={() => startNewGame(true)}
      >
        Reset Game
      </button>
    </div>
  );
};

export default ColorGuessingGame;
