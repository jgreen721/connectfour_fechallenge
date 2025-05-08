import React, {useRef,useEffect} from 'react'
import gsap from "gsap"
import "./Logo.css"


const Dot = ({dot})=>{
    const dotRef = useRef();


    useEffect(()=>{
        // console.log("animate dots!")
        gsap.fromTo(dotRef.current,{translateY:-100},{translateY:0,delay:dot.delay,ease:"ease-in"})
    },[]);

    return(
        <div className="dot-parent">
            <div ref={dotRef} className={`dot bg-${dot.color}`}></div>
        </div>
       
    )
}

const Logo = () => {
    let dots = [
        {id:1,color:'red',delay:1.5},
        {id:2,color:'yellow',delay:1},
        {id:3,color:'yellow',delay:.25},
        {id:4,color:'red',delay:.5},
    ]
    const logoRef = useRef();

 
  return (
    <div ref={logoRef} className="logo-dots">
        {dots.map(dot=>(
            <Dot key={dot.id} dot={dot}/>
        ))}
    </div>
  )
}

export default Logo