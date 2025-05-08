import React from 'react'
import "./PlayerCard.css"

const PlayerCard = ({icon,playerName,playerScore}) => {


  return (
    <div className="player-card">
      <div className="icon-div absolute-icon">
        <img src={icon} alt="" />
      </div>
      <h3>{playerName}</h3>
      <h1>{playerScore}</h1>
    </div>
  )
}

export default PlayerCard