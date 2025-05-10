import React, {useEffect, useState} from 'react'
import { GameHeader,MobileRow,GameSection,BG_Stripe, Pause } from './components'
import {useNavigate} from "react-router-dom"
import { gamegrid } from '../../const'
import "./Game.css"
import { sleep, checkDiagonalBottomLeftTopRight,checkDiagonalTopLeftBottomRight,checkHorizontally,checkVertically, convertCoordsToChipIdx } from '../../utils/helpers'

const Game = () => {
  const [playersTurn,setPlayersTurn] = useState({color:"red",val:1});
  const [isPaused,setIsPaused] = useState(false);
  const [gameGrid,setGameGrid] = useState(gamegrid);
  const [playerOneScore,setPlayerOneScore] = useState(0)
  const [playerTwoScore,setPlayerTwoScore] = useState(0)
  const [markerOffset,setMarkerOffset] = useState(0);
  const [canMakeNextMove,setCanMakeNextMove] = useState(true)
  const [winningCoords,setWinningCoords] = useState(null);
  const navigate = useNavigate();
  const OFFSET_DISTANCE = innerWidth > 850 ? 80 : 52.5;



  useEffect(()=>{
  
    ()=> localStorage.clear("startplayer")
  })
  

  const handleChooseColumn=(colNum)=>{
    // console.log("ColNum",colNum);
    setCanMakeNextMove(false);
    setMarkerOffset(colNum * OFFSET_DISTANCE);
    let chipData = getChipData(colNum);
    updateGameGrid(chipData.coords,playersTurn.val)
    // togglePlayer(2000);
    // setMoveCounter((moveCounter)=>++moveCounter)
    // console.log(chipData);
    return chipData;
  }

  const getChipData=(colNum)=>{
    let {distance,coords,chipIdx} = getFallDistanceAndCoords(colNum);
    return {distance,coords,chipIdx,className:`${playersTurn.color}-chip`,value:playersTurn.val,isWinner:false}
  }






  const getFallDistanceAndCoords=(colNum)=>{
    // console.log("Get the fall distance for column " + colNum)
    let dropDistance = OFFSET_DISTANCE;
    let rowNum = 0;
    let hitBottom = false;
    while(!hitBottom){
      if(rowNum == 6){
        rowNum--;
        dropDistance-=OFFSET_DISTANCE;
        hitBottom = true;
        // console.log("hit the bottom of the board!");
        break;
      }
      if(gameGrid[rowNum][colNum] != 0){
        rowNum--;
        dropDistance-=OFFSET_DISTANCE
        hitBottom = true;
      }else{
        rowNum++;
        dropDistance += OFFSET_DISTANCE
      }
    }

    return{distance:dropDistance,coords:{x:colNum,y:rowNum},chipIdx:convertCoordsToChipIdx(colNum,rowNum)}
  }

  const updateGameGrid=(coords,playerVal)=>{
    setGameGrid((gameGrid)=>gameGrid.map((row,y)=>y == coords.y ? row.map((cel,x)=>x == coords.x ? playerVal : cel) : row));
    let tempGrid = gameGrid.map((row,y)=>y == coords.y ? row.map((cel,x)=>x == coords.x ? playerVal : cel) : row);
    checkForWinner(tempGrid,playerVal);
  }


  const checkForWinner=(grid,playerVal)=>{
    for(let y=0;y<grid.length;y++){
     for(let x=0;x<grid[0].length;x++){
        if(grid[y][x] == playerVal){
            let horizResponse = checkHorizontally(grid,y,x,playerVal)
            if(horizResponse.hasWon){
              console.log("user has won horizontally!",horizResponse.coords)
              setWinningCoords(horizResponse.coords)
              handleWinner("horizontally")
              return;
            }
            let vertResponse = checkVertically(grid,y,x,playerVal)
            if(vertResponse.hasWon){
              console.log("user has won vertically!",vertResponse.coords)
              setWinningCoords(vertResponse.coords)
              handleWinner("vertically")

              return;
            }
            let diag1Response = checkDiagonalBottomLeftTopRight(grid,y,x,playerVal)
            if(diag1Response.hasWon){
              console.log("user has won diagonally - bottomLeftTopRight",diag1Response.coords)
              setWinningCoords(diag1Response.coords)
              handleWinner("diagonally")

            return;
            }
            let diag2Response = checkDiagonalTopLeftBottomRight(grid,y,x,playerVal)
            if(diag2Response.hasWon){
              console.log("user has won diagonally - topLeftBottomRight",diag2Response.coords)
              setWinningCoords(diag2Response.coords)
              handleWinner("diagonally")

              return;
            }

        }
      }
    }
    togglePlayer(2000);
  }


  const handleWinner=async()=>{
    if(playersTurn.color == "red"){
      setPlayerOneScore((playerOneScore)=>++playerOneScore)
    }else{
      setPlayerTwoScore((playerTwoScore)=>++playerTwoScore)
    }
    // await sleep(4000);
    // handleRestart();
  }



const togglePlayer = async(delay)=>{
    await sleep(delay);
    setPlayersTurn((playersTurn)=> playersTurn.color == "red" ? {color:"yellow",val:2} : {color:"red",val:1})
    setCanMakeNextMove(true);
  }


const handleReturnToMenu=()=>{
        navigate("/")
  }

  const handleRestart=()=>{
    console.log("handle restart fired!")
    setIsPaused(false);
    setGameGrid(gamegrid);
    let lastPlayerToStart = localStorage.getItem("startplayer") || "red"
    console.log(lastPlayerToStart);
    setPlayersTurn(playersTurn =>playersTurn = lastPlayerToStart == "red" ? {color:"yellow",val:2} : {color:"red",val:1});
    localStorage.setItem("startplayer",lastPlayerToStart == "red" ? "yellow" : "red");
    setMarkerOffset(0);
    setWinningCoords(null);
    setCanMakeNextMove(true);
  }

  const handleQuit = ()=>{
    console.log('handle quit fired!')
    navigate("/")

  }

  onkeydown=(e)=>{
    if(e.key == " "){
      e.preventDefault();
      handlePause();
      }
  }

const handlePause=()=>{
    if(isPaused){
      setIsPaused((isPaused)=>isPaused == true ? false : true)
    }else{
      setIsPaused((isPaused)=>isPaused == true ? false : true)
    }
  }

  
  return (
    <div className="view-screen game-screen">
      <div className="screen-content">
        <Pause isPaused={isPaused} handlePause={handlePause} handleRestart={handleRestart} handleQuit={handleQuit}/>
        <GameHeader handleReturnToMenu={handleReturnToMenu} handleRestart={handleRestart}/>
        <MobileRow playerOneScore={playerOneScore} playerTwoScore={playerTwoScore}/>
        <GameSection 
        gameGrid={gameGrid} 
        winningCoords={winningCoords} 
        togglePlayer={togglePlayer}
        playersTurn={playersTurn} 
        handleChooseColumn={handleChooseColumn} 
        playerOneScore={playerOneScore} 
        playerTwoScore={playerTwoScore} 
        markerOffset={markerOffset} 
        canMakeNextMove={canMakeNextMove} 
        handleRestart={handleRestart}
        isPaused={isPaused}/>
        <BG_Stripe winningCoords={winningCoords} playersTurn={playersTurn}/>
      </div>
    </div>
  )
}

export default Game