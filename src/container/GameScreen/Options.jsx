import React, {useContext} from 'react';
import GameContext from '../../context/GameContext';
export const Options = () => {
  
  const {getQuote, answer, changeQuote} = useContext(GameContext)

  const resolveAnswer = (e) => {
    answer(e.target.innerText) ? e.target.style.background = "green" : e.target.style.background = "red"
    resetQuestion(e)
    setTimeout(() => {
      shuffle(arr)
      changeQuote()
    }, 400)
  }

  const resetQuestion = (e) => {
    setTimeout(() => {
      e.target.style.background = null
    }, 300)

  }

  return <>
      <div className='answerBoxContainer'>
        <div className='answerBox'>
            <div className='answerOptions'>
              {arr.map(singleArray => {
                return <div key={singleArray} onClick={resolveAnswer}><p> {getQuote[singleArray].movie} </p></div>
              })}
            </div>
        </div>
      </div>
  </>;
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Used like so
var arr = [0, 1, 2, 3];
shuffle(arr);
