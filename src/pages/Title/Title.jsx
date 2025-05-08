import React from 'react'
import {TitleCard,MobileTitle} from "./components"
import "./Title.css"

const Title = () => {
  


  return (
    <div className="view-screen title-screen">
      <div className="screen-content center-screen-content">
         <div className="desktop-tablet w-full">
           <div className="title-card-wrapper">
            <TitleCard/>
          </div>
        </div>
        <div className="mobile w-full">
          <MobileTitle/>
        </div> 
      </div>
    </div>
  )
}

export default Title