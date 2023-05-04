import React, {useState, useEffect} from "react";
import GamesTable from "./components/GamesTable";
import './App.css';

function App() {
  const [game, setGame] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:8001/games")
      .then((r) => r.json())
      .then((game) => {
        setGame(game)
      });
  }, []);  

 
 
  return (
    <div className="App">
      <div className="ui segment violet inverted">
        <h2>Siel Games</h2>
      </div>
      <GamesTable games={game} />
    </div>
  );
}

export default App;
