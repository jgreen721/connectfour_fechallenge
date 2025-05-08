import React from 'react'
import "./Button.css"

const Button = ({children,className,handleClick}) => {
  return (
    <div className="btn-div">
    <button onClick={handleClick} className={`btn ${className}`}>
        {children}
    </button>
    <div className="btn-shadow"></div>
    </div>

  )
}

export default Button