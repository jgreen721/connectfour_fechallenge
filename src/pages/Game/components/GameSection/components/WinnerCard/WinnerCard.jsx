import React, {useEffect,useRef} from 'react'
import "./WinnerCard.css"

const WinnerCard = ({playersTurn,handleRestart}) => {
  return (
    <div className="winner-card">
      <h3>Player {playersTurn.color == "red" ? 1 : 2}</h3>
      <h1>Wins</h1>
      <button onClick={handleRestart} className="normal-btn">Play Again</button>
    </div>
  )
}

export default WinnerCard