import React, { useState, useEffect } from 'react';
import './Flashcard.css';

const Flashcard = ({ content }) => (
  <div className="flashcard">
    <div className="flashcard-content">{content}</div>
  </div>
);

const FlashcardRotator = ({ flashcards }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % flashcards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [flashcards.length]);

  return <Flashcard content={flashcards[current]} />;
};

export default FlashcardRotator;
