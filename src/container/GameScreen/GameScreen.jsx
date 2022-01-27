import React from 'react';
import { GameHeader } from './GameHeader';
import { Options } from './Options';
import { QuestionBox } from './QuestionBox';

export const GameScreen = () => {
  return <div>
      <GameHeader />
      <QuestionBox />
      <Options />
  </div>;
}

