import React, {useState,useEffect,useRef} from 'react'
import { sleep } from '../../../../../../utils/helpers'
import gsap from "gsap"
import "./ActionRow.css"

// console.log(gsap)

const BoardChip = ({chip,winningCoords})=>{
  const chipRef = useRef();
  const tl = gsap.timeline();

  useEffect(()=>{
    tl.fromTo(chipRef.current,{scale:0},{scale:1,delay:.25})
    tl.to(chipRef.current,{translateY:chip.distance,delay:.5,ease:"bounce.out"})
  },[])



  return (
    <div ref={chipRef} className={`boardchip ${chip.className} ${chip.isWinner ? 'winning-chip' : ''}`}></div>
  )
}


const ActionCel = ({actionCel,colNum,handleChooseColumn,canMakeNextMove,winningCoords})=>{
  const [chips,setChips] = useState([]);
  const btnRef = useRef();
  

  const chooseColumn=()=>{
    if(!canMakeNextMove)return;
    let chipData = handleChooseColumn(colNum)
   
    setChips([...chips,{id:chips.length+1,...chipData}])
    btnRef.current.blur();
  }


  useEffect(()=>{
if(winningCoords){
    handleCheckChipsAsWinners()
}else{
  setChips([]);
}
  },[winningCoords]);

  // useEffect(()=>{
  //   if(moveCounter == 0){
  //     setChips([]);
  //   }
  // },[moveCounter])


  const handleCheckChipsAsWinners = async()=>{
    try{
      await sleep(1000);
      for(let i=0;i<winningCoords.length;i++){
        setTimeout(()=>{
          let winningIdx = winningCoords[i];
          setChips((chips)=>chips.map(c=>c.chipIdx == winningIdx ? {...c,isWinner:true} : c))
        },i * 500);
      }
    }
    catch(e){
      console.log("error")
    }
  }



  return (
    <div className="action-cel">
      <button ref={btnRef} onClick={chooseColumn} className="action-cel-btn"></button>
      {chips.map(chip=>(
        <BoardChip key={chip.id} chip={chip} winningCoords={winningCoords}/>
      ))}
    </div>
  )
}

const ActionRow = ({actionRow,handleChooseColumn,winningCoords,canMakeNextMove}) => {
  // console.log(actionRow);
  return (
    <div className="action-row">
      {actionRow.map((actionCel,idx)=>(
        <ActionCel key={idx} actionCel={actionCel} colNum={idx} handleChooseColumn={handleChooseColumn} canMakeNextMove={canMakeNextMove} winningCoords={winningCoords}/>
      ))}
    </div>
  )
}

export default ActionRow