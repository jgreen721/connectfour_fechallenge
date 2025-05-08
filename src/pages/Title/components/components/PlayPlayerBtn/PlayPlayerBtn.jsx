import React from 'react'
import { Button } from '../../../../../components'
import {playerVsPlayerIcon} from "../../../../../const"
import "./PlayPlayerBtn.css"


const PlayPlayerBtn = ({handleNavigate}) => {
  return (

    <Button className="bg-yellow" handleClick={()=>handleNavigate("game")}>
        <div className="btn-content justify-between">
            <p>Play vs Player</p>
            <div className="icon-div">
                <img src={playerVsPlayerIcon} alt="" />
            </div>
        </div>
    </Button>
  )
}

export default PlayPlayerBtn