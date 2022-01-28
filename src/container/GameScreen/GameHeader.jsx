import React, {useContext} from 'react';
import "./style.css"
import {BsPower, BsFillVolumeMuteFill} from "react-icons/bs"
import { Link } from 'react-router-dom';
import GameContext from '../../context/GameContext';
export const GameHeader = () => {
  const {score, strike} = useContext(GameContext)

  return <>
    <div className='headerContainer'>
        <select name="difficulty" id="levelDifficulty" className='gameDifficulty'>
          <option value="Easy">Easy</option>
          <option value="Regular">Regular</option>
          <option value="Hard">Hard</option>
          <option value="Extreme">Extreme</option>
        </select>
        <div className='scoreBoard'>
          <p>Score: { score} </p>
        </div>
        <div className='strikes'>
          <p>Failed: { strike }</p>
        </div>
        <div className='buttonContainer'>
          <div className='endButton button'>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <BsPower className='buttonIcons'/>
            </Link>
          </div>
          <div className='muteButton button'>
          <BsFillVolumeMuteFill className='buttonIcons' />
          </div>
        </div>
        
    </div>
  </>;
}
