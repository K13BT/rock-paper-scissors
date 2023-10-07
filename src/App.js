import GameOptions from "./components/GameOptions";
import Header from "./components/Header";
import Rules from "./components/Rules";
import GamePlay from "./components/GamePlay";
import { useState } from "react";
import { options } from "./options";
import Context from "./Context";

function App() {
  const [gameOngoing, setGameOngoing] = useState(false)
  const [playerCard, setPlayerCard] = useState({})

  const onOptionSelect = (name) => {
    const card = options.find(option => option.name === name)
    setGameOngoing(true)
    setPlayerCard(card)
  }

  return (
    <div className="grid justify-items-center">
      <Context>
        <Header />
        {gameOngoing ? <GamePlay playerCard={playerCard} setGameOngoing={setGameOngoing} /> : <GameOptions onOptionSelect={onOptionSelect}/>}
        <Rules />
      </Context>
    </div>
  );
}

export default App;
