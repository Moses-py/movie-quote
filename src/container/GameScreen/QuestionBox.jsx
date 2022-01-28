import React, {useContext} from 'react';
import GameContext from '../../context/GameContext';
import "./style.css"

export const QuestionBox = () => {
  const {getQuote} = useContext(GameContext)
  return <>
    <div className='questionBoxContainer'>
        <div className='questionBox'>
            <p>"{getQuote[0].quote}"</p>
        </div>
    </div>
  </>;
}

