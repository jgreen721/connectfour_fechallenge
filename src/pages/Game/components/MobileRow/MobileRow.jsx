import React from 'react'
import { MobilePlayerCard } from './components'
import { playerOneIcon,playerTwoIcon } from '../../../../const'
import "./MobileRow.css"

const MobileRow = ({playerOneScore,playerTwoScore}) => {
  return (
    <div className="tablet-mobile w-full my-2">
      <div className="mobile-playercard-row">
      <MobilePlayerCard playerName="Player 1" playerScore={playerOneScore} icon={playerOneIcon}/>
      <MobilePlayerCard playerName="Player 2" playerScore={playerTwoScore} icon={playerTwoIcon}/>
      </div>
    </div>
  )
}

export default MobileRow