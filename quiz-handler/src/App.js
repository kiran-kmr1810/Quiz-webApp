import './App.css';
import React, {useState} from 'react';

import MainMenu from './Components/MainMenu';
import QuizCore from './Components/QuizCore';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/Context';

function App() {
  const [gameState, setGameState]= useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
      {gameState=="menu" && <MainMenu />}
      {gameState=="quiz" && <QuizCore />}
      {gameState=="end" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
