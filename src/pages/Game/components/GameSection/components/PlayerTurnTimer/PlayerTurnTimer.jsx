import React, {useState, useEffect,useRef} from 'react'
import "./PlayerTurnTimer.css"

const PlayerTurnTimer = ({playersTurn,isPaused,togglePlayer}) => {
  const [timer,setTimer] = useState(20);
  const [restart,setRestart] = useState(true)
  const timerRef = useRef();

  useEffect(()=>{

    
    if(!isPaused){
      // console.log('run timer')
      let tempTimer = timer;
      timerRef.current = setInterval(()=>{
        tempTimer--;
        // console.log(tempTimer);
        setTimer((timer)=>timer > 0 ? --timer : 0);
      },1000);
      
    }else{
      // console.log("pause timer")
      clearInterval(timerRef.current);
    }

   
    return ()=>clearInterval(timerRef.current);
  },[isPaused,restart])


  useEffect(()=>{
      clearInterval(timerRef.current);
      setTimer(20);
      setRestart(restart=>restart = true);
  },[playersTurn])


  useEffect(()=>{
    if(timer == 0){
      clearInterval(timerRef.current);
      togglePlayer();
      setTimer(20);
      setRestart(true)

    }
    else{
      if(restart)setRestart(false);  
    }
  },[timer])
  return (
    <div className="player-turn-timer-container">
    <div className="player-turn-timer-parent">
      <div className={`player-turn-top ${playersTurn.color == "red" ? "bg-red" : "bg-yellow"}`}></div>
      <div className="player-turn-top-shadow"></div>
      <div className={`player-turn-card ${playersTurn.color == "red" ? "bg-red" : "bg-yellow"}`}>
        <h3 className="uppercase player-turn-h3">Player {playersTurn.color == "red" ? "1" : "2"}'s Turn</h3>
        <h1 className="timer-h1">{timer}s</h1>
      </div>
    </div>
    </div>
  )
}

export default PlayerTurnTimer