import React, {useState, useEffect} from "react";
import GamesTable from "./components/GamesTable";
import Search from "./components/Search";
import './App.css';

function App() {
  const [game, setGame] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:8001/games")
      .then((r) => r.json())
      .then((game) => {
        setGame(game)
      });
  }, []); 

  useEffect(() => {
    fetch("http://localhost:8001/games?q=" + search)
      .then((resp) => resp.json())
      .then(game => setGame(game))
  }, [search])
  
  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <div className="ui segment violet inverted">
        <h2>Siel Games</h2>
      </div>
      <Search handleSearch={handleSearch} />
      <GamesTable games={game} />
      
    </div>
  );
}

export default App;
