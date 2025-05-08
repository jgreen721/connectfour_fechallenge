import React from 'react'
import "./GameBoard.css"


const GameCel = ({gameCel})=>{


  return(
    <div className="game-cel">
      <div className="game-cel-shadow"></div>
    </div>
  )
}

const GameBoard = ({gameBoard}) => {
  return (
    <div className="gameboard-parent">
      <div className="gameboard">
      {gameBoard.map((gameRow,idx)=>(
        <div key={idx} className="game-row">
          {gameRow.map((gameCel,i)=>(
            <GameCel key={i} gameCel={gameCel}/>
          ))}
        </div>
      ))}
      </div>
    </div>
  )
}

export default GameBoard