import React, {useContext} from 'react';
import GameContext from '../../context/GameContext';
import "./style.css"

export const QuestionBox = () => {
  const {getQuote} = useContext(GameContext)
  return <>
    <div className='questionBoxContainer'>
        <div className='questionBox'>
            <p> <span>"</span> {getQuote[0].quote} <span>"</span></p>
        </div>
    </div>
  </>;
}

