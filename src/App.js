import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameLandingScreen } from './container/GameLanding/GameLandingScreen';
import { GameScreen } from './container/GameScreen/GameScreen';
import { GameContextProvider } from './context/GameContext';
export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GameLandingScreen />} />
          <Route path="play" element = {
            <GameContextProvider>
              <GameScreen />
            </GameContextProvider>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

