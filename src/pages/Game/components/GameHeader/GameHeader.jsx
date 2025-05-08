import React from 'react'
import {Logo} from "../../../../components"
import "./GameHeader.css"

const GameHeader = ({handleRestart, handleReturnToMenu}) => {
  return (
    <header className="game-header">
      <div className="normal-btn-div">
        <button onClick={handleReturnToMenu} className="normal-btn">Menu</button>
      </div>
<Logo/>
      <div className="normal-btn-div">
        <button onClick={handleRestart} className="normal-btn">Restart</button>
      </div>
    </header>
  )
}

export default GameHeader