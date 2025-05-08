import React from 'react'
import { Button } from '../../../../../../components'
import "./ContinueBtn.css"

const ContinueBtn = ({handlePause}) => {
  return (
    <Button className="bg-white" handleClick={handlePause}>
    <div className="btn-content center">
        <p>Continue</p>
    </div>
</Button>
  )
}

export default ContinueBtn