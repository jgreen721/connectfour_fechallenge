import React from 'react'
import { Button } from '../../../../../../components'
import "./QuitBtn.css"

const QuitBtn = ({handleQuit}) => {
  return (
    <Button className="bg-red" handleClick={handleQuit}>
    <div className="btn-content center">
        <p>Quit Game</p>
    </div>
</Button>
  )
}

export default QuitBtn