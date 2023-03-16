import Icon from "./Components/Icon"
import { useState } from "react"

import "./style.css"


const App = () => {
    let tiktoktoeArray = new Array(9).fill("") 
    let [isCross, setIsCross] = useState(true)
    let [winner, setWinner] = useState("X has won")

    // playAgain
    function playAgain(){
            tiktoktoeArray.fill("")
            setIsCross(true) 
            setWinner("")
     }

    // findWinner 

    function findWinner(){

        // row 
        if(tiktoktoeArray[0] == tiktoktoeArray[1] && tiktoktoeArray[0] == tiktoktoeArray[2] && tiktoktoeArray[0] != ""){
            setWinner(`${tiktoktoeArray[0]}  has won`)
        }
        else if(tiktoktoeArray[3] == tiktoktoeArray[4] && tiktoktoeArray[3] == tiktoktoeArray[5] && tiktoktoeArray[3] != ""){
            setWinner(`${tiktoktoeArray[3]}  has won`)
        }
        else if(tiktoktoeArray[6] == tiktoktoeArray[7] && tiktoktoeArray[6] == tiktoktoeArray[8] && tiktoktoeArray[6] != ""){
            setWinner(`${tiktoktoeArray[6]}  has won`)
        }

        // column 

        else if(tiktoktoeArray[0] == tiktoktoeArray[3] && tiktoktoeArray[0] == tiktoktoeArray[6] && tiktoktoeArray[0] != ""){
            setWinner(`${tiktoktoeArray[0]}  has won`)
        }
        else if(tiktoktoeArray[1] == tiktoktoeArray[4] && tiktoktoeArray[1] == tiktoktoeArray[7] && tiktoktoeArray[1] != ""){
            setWinner(`${tiktoktoeArray[1]}  has won`)
        }
        else if(tiktoktoeArray[2] == tiktoktoeArray[5] && tiktoktoeArray[2] == tiktoktoeArray[8] && tiktoktoeArray[2] != ""){
            setWinner(`${tiktoktoeArray[2]}  has won`)
        }

        // diagonal 
        else if(tiktoktoeArray[0] == tiktoktoeArray[4] && tiktoktoeArray[0] == tiktoktoeArray[8] && tiktoktoeArray[0] != ""){
            setWinner(`${tiktoktoeArray[0]}  has won`)
        }
        else if(tiktoktoeArray[2] == tiktoktoeArray[4] && tiktoktoeArray[2] == tiktoktoeArray[6] && tiktoktoeArray[2] != ""){
            setWinner(`${tiktoktoeArray[2]}  has won`)
        }

        // draw

    }



    // changeItem

    function changeItem(index){
           
          // some changes
           if(tiktoktoeArray[index] !=""){
                 console.log("already filled") // some changes
           }

           else if(tiktoktoeArray[index] == ""){
                tiktoktoeArray[index] =  isCross==true?"cross":"circle"
                setIsCross(!isCross)
                findWinner()
           }
    }


    return (
            <div className="tik"> 
                {
                  winner=="" ? (
                    <div className="turn"> <h1>Hey {isCross==true?"cross":"cricle"} Your Turn </h1></div>
                  )  : 
                  (
                    <div className="winner"> 
                        <h1> {winner} </h1>

                        <button onClick={playAgain}> Play Again </button>

                    </div>
                  ) 
                  
                }

                <div className="grid"> 
                   {   
                     tiktoktoeArray.map((value, index)=> (
                          <div className="box" onClick={()=>changeItem(index)}> 
                                  <Icon  user_icon={value}/>  
                          </div>
                     ))

                   }

                </div>



            </div>
    )
}

export default App