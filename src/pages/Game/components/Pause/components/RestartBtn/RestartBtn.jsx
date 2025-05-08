import React from 'react'
import { Button } from '../../../../../../components'
import "./RestartBtn.css"

const RestartBtn = ({handleRestart}) => {
  return (
    <Button className="bg-white" handleClick={handleRestart}>
    <div className="btn-content center">
        <p>Restart</p>
    </div>
</Button>
  )
}

export default RestartBtn