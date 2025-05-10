import React from 'react'
import {PlayerCard, GameBoard,ActionRow,PlayerTurnTimer, ColumnMarker,WinnerCard} from "./components"
import {playerOneIcon,playerTwoIcon} from "../../../../const"

import "./GameSection.css"

const GameSection = ({gameGrid,handleChooseColumn,playersTurn,playerOneScore,playerTwoScore,markerOffset,canMakeNextMove,winningCoords,handleRestart,isPaused,togglePlayer}) => {

  return (
    <div className="gamerow-container">
    <div className="gamerow-section">
      <div className="desktop player-card-div">
        <PlayerCard icon={playerOneIcon} playerName="Player 1" playerScore={playerOneScore}/>
      </div>
      <div className="gameboard-column">
        <ColumnMarker markerOffset={markerOffset} playersTurn={playersTurn} canMakeNextMove={canMakeNextMove}/>
        <ActionRow actionRow={gameGrid[0]} handleChooseColumn={handleChooseColumn} winningCoords={winningCoords} canMakeNextMove={canMakeNextMove}/>
        <GameBoard gameBoard={gameGrid}/>
      </div>
      <div className="desktop player-card-div">
        <PlayerCard icon={playerTwoIcon} playerName="Player 2" playerScore={playerTwoScore}/>
      </div>
    </div>
      {winningCoords?.length 
      ?
      <WinnerCard playersTurn={playersTurn} handleRestart={handleRestart}/>
      :
      <PlayerTurnTimer playersTurn={playersTurn} togglePlayer={togglePlayer} isPaused={isPaused}/>
      }
    </div>
  )
}

export default GameSection