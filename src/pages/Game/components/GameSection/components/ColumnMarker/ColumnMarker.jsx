import React from 'react'
import "./ColumnMarker.css"

const ColumnMarker = ({markerOffset,playersTurn,canMakeNextMove}) => {
  return (
    <div style={{transform:`translateX(${markerOffset}px`}} className={`column-marker-parent ${canMakeNextMove ? "" : "muted"} `}>
      <div className="column-marker">
         <div className={`column-marker-base bg-${playersTurn.color}`}></div>
        <div className={`column-marker-bottom bg-${playersTurn.color}`}></div> 
      </div>
        <div className="column-marker-shadow">
        <div className="column-marker-shadow-base"></div>
        <div className="column-marker-shadow-bottom"></div> 
        </div>
    </div>
  )
}

export default ColumnMarker