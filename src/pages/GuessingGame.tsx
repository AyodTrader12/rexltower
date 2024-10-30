import React, { useState } from "react";

const GuessingGame: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState<number>(
    Math.floor(Math.random() * 10) + 1
  );
  const [guess, setGuess] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [showNumber, setShowNumber] = useState<boolean>(false);

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(Number(e.target.value));
  };

  const handleGuessSubmit = () => {
    if (guess === randomNumber) {
      setFeedback("You guessed right!");
    } else {
      setFeedback("You guessed wrong.");
    }
  };

  const handleShowNumber = () => {
    setShowNumber(true);
  };

  const handleRestart = () => {
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
    setGuess(null);
    setFeedback("");
    setShowNumber(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4">Guessing Game</h1>
        <p className="mb-4 text-gray-700">Guess a number between 1 and 10</p>

        <input
          type="number"
          value={guess ?? ""}
          onChange={handleGuessChange}
          className="border border-gray-300 rounded px-3 py-2 mb-4 text-center w-full"
          min="1"
          max="10"
        />

        <button
          onClick={handleGuessSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 w-full"
        >
          Submit Guess
        </button>

        {feedback && <p className="text-lg font-semibold mb-4">{feedback}</p>}

        <button
          onClick={handleShowNumber}
          className="bg-gray-500 text-white px-4 py-2 rounded mb-4 w-full"
        >
          Show Number
        </button>

        {showNumber && (
          <p className="text-lg font-semibold mb-4">
            The number was: {randomNumber}
          </p>
        )}

        <button
          onClick={handleRestart}
          className="bg-red-500 text-white px-4 py-2 rounded w-full"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default GuessingGame;
