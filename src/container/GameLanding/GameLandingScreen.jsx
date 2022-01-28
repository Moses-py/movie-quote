import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Gamelanding.css"
export const GameLandingScreen = () => {
  return (
    <>
      <div className='container'>
        <div className='overlay'></div>
          <div className='landingContainer'>
            <h1>Movie Quotes</h1>
          <div className='playButton'>
            <button className='startButton'>
              <Link to="/play" style={{ textDecoration: 'none' }}>Start Game</Link>
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>

  );
}

