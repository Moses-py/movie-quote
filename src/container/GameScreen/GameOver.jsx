import React from 'react';
import reactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import GameContext from '../../context/GameContext';

export const GameOver = () => {
    const {updateGameStatus, score} = useContext(GameContext)
    return reactDom.createPortal( 
      <>
        <div className='gameEndOverlay'></div>
        <div className='gameOverPanel'>
            <div className='panelContent'>
                <h1>Game Over</h1>
                <p>Score: {score}</p>
                <div className='actionButtons'>
                    <button>
                        <Link onClick={()=> updateGameStatus()} to="/" style={{ textDecoration: 'none' }}>
                            End
                        </Link>
                    </button>
                </div>
            </div>
        </div>
      </>, document.getElementById("portal")
)
}
