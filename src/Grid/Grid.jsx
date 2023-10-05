import { useState } from "react"
import Card from '../Card/Card.jsx';
import "./Grid.css";
import isWinner from "../isWinner/checkWinner.js";



function Grid({numOfCards})
{
   const [board,setBoard]=useState(Array(numOfCards).fill(""))
   const [turn,setTurn]=useState(false); //true => O,false => X
   const [winner,setWinner] = useState(null);

   function play(index)
   {
            if(turn==true)
            {
                board[index] = "O";
            } else{
                board[index] = "X";
            }

            const win = isWinner(board, turn ? "O" : "X");

            if(win) {
                setWinner(win);
            }
            setBoard([...board])
            setTurn(!turn);
   }
    

   function reset()
   {
     setTurn(true);
     setWinner(null);
     setBoard(Array(numOfCards).fill(""))
   }

    return (

        <div className="grid-wrapper">

             {
                 (
                <>
                    <h1 className="turn-highlight"> Winner is {winner} </h1>
                    <button className="reset" onClick={reset}>Reset Game</button>
                </>
                )
             }

            <h1 className="turn-highlight">Turn  :  { winner ? 'Play Again' : (turn)?'O':'X'} </h1>
        <div className="grid">
           {board.map((ele,idx)=> <Card key={idx}  onPlay={play} player={ele} index={idx} gameEnd={(winner ? true : false) }     />)}
        </div>
        </div>
    )
}

export default Grid