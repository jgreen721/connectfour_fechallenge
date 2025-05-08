import React from 'react'
import "./BG_Stripe.css"

const BG_Stripe = ({winningCoords,playersTurn}) => {
  return (
    <div className={`bg-stripe ${winningCoords?.length && `bg-${playersTurn.color} winning-stripe`}`}></div>
  )
}

export default BG_Stripe