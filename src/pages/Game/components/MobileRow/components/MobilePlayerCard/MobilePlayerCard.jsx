import React from 'react'
import "./MobilePlayerCard.css"

const MobilePlayerCard = ({icon,playerScore,playerName}) => {
        // console.log(playerName);
  return (
    <div className="mobile-player-card">
        {playerName == "Player 1"
        ?
        <div className="mobile-player-card-content">
            <div className="icon-div absolute-mobile-icon-1">
                <img src={icon} alt="" />
            </div>
            {/* <div className="mobile-player-card-text-content"> */}
            <h3>{playerName}</h3>
            <h1>{playerScore}</h1>
            {/* </div> */}
        </div>
       :
       <div className="mobile-player-card-content">
            <div className="icon-div absolute-mobile-icon-2">
                <img src={icon} alt="" />
            </div>
            {/* <div className="mobile-player-card-text-content"> */}
            <h3 className="mobile">{playerName}</h3>
            <h1>{playerScore}</h1>
            <h3 className="tablet">{playerName}</h3>
            {/* </div> */}
       </div>
    }
    </div>
  )
}

export default MobilePlayerCard