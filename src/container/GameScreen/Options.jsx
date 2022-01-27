import React, {useContext} from 'react';
import GameContext from '../../context/GameContext';
import arr from "../../helpers/shuffleArray"
import styled from 'styled-components';

const OptionBlock = styled.div`
  &.p {
    background-color: ${props => props.answered.status && props.answered.key === props.setStyle ? "green" : "red" }
  }
`

export const Options = () => {
  const {getQuote, answer, isCorrect} = useContext(GameContext)


  const resolveAnswer = (e) => {
    answer(e.target.innerHTML)
  }

  return <>
      <div className='answerBoxContainer'>
        <div className='answerBox'>
            <div className='answerOptions'>
              {arr.map(singleArray => {
                return (
                  <OptionBlock key={singleArray} answered={isCorrect} setStyle={getQuote[singleArray].movie.replace(/\s+/g, '')} className={getQuote[singleArray].movie.replace(/\s+/g, '')}  onClick={resolveAnswer}>
                      <p> {getQuote[singleArray].movie} </p>
                  </OptionBlock>
                )
              })}
            </div>
        </div>
      </div>
  </>;
}

