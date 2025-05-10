import React, {useRef,useEffect} from 'react'
import { Logo } from '../../../../components'
import { RulesBtn,PlayPlayerBtn } from '../components'
import { useNavigate } from 'react-router-dom'
import gsap from "gsap"
import "./MobileTitle.css"

const MobileTitle = () => {
    const navigate = useNavigate();
    const playBtnRef = useRef();
    const rulesBtnRef = useRef();
  
    // console.log("title card rendered---")
  
    const handleNavigate =(dest)=>{
      navigate(dest)
    }
  
    useEffect(()=>{
      gsap.fromTo(playBtnRef.current,{scaleX:0},{scaleX:1,ease:"bounce",delay:1});
      gsap.fromTo(rulesBtnRef.current,{scaleX:0},{scaleX:1,delay:1.5,ease:"bounce"});
    })
  return (
    <div className="mobile-title-section">
        <Logo/>

        <div className="title-card-btns-section">
          <div ref={playBtnRef}>
            <PlayPlayerBtn handleNavigate={handleNavigate}/>
          </div>
          <div ref={rulesBtnRef}>
            <RulesBtn handleNavigate={handleNavigate}/>
          </div>
        </div>
    </div>
  )
}

export default MobileTitle