import React from 'react'
import { Button } from '../../../../../components'
import "./RulesBtn.css"

const RulesBtn = ({handleNavigate}) => {
  return (
    <Button className="bg-white" handleClick={()=>handleNavigate("rules")}>
        <div className="btn-content flex-center">
            Game Rules
        </div>
    </Button>
  )
}

export default RulesBtn