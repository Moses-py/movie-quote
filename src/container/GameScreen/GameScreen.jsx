import React from 'react';
import { useContext } from 'react/cjs/react.development';
import GameContext from '../../context/GameContext';
import { GameHeader } from './GameHeader';
import { GameOver } from './GameOver';
import { Options } from './Options';
import { QuestionBox } from './QuestionBox';

export const GameScreen = () => {
  const {gameOver} = useContext(GameContext)
  return <div>
      <GameHeader />
      <QuestionBox />
      <Options />
      { !gameOver ? null : <GameOver /> }
  </div>;
}

