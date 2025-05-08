import React from 'react'
import { ContinueBtn, RestartBtn, QuitBtn } from './components'
import "./Pause.css"

const Pause = ({isPaused,handlePause,handleQuit,handleRestart}) => {
  return (
    <div className={`pause-overlay ${isPaused ? 'show-pause' : 'hide-pause'}`}>
        <div className="pause-card">
            <h1>Pause</h1>
            <div className="pause-card-btns-section">
                <ContinueBtn handlePause={handlePause}/>
                <RestartBtn handleRestart={handleRestart}/>
                <QuitBtn handleQuit={handleQuit}/>
            </div>
        </div>
    </div>
  )
}

export default Pause