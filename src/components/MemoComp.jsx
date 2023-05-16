import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addMemoToolkit, deleteMemoSplice, toggleLike } from '../slices/memoSlice';

export default function MemoComp() {
   const memo = useSelector((state)=>(state.memo));
   const [input, setInput] = useState("")

   const dispatch = useDispatch()
   return (
      <div>
         <h1>메모장</h1>
         <div>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={()=>{dispatch( addMemoToolkit({text: input, date: "2023-05-15"}))}}>
               추가
            </button>
         </div>
         {
            memo.map((m, index)=>(
               <div key={m.id}>
                  <h3>{m.text}</h3>
                  <p>{m.date}</p>
                  <button 
                  onClick={()=>{dispatch(toggleLike(m.id))}}>
                     {m.isLiked ? "♥" : "♡"}
                  </button>
                  <button 
                  onClick={()=>{dispatch(deleteMemoSplice(index))}}>
                     X
                  </button>
               </div>
            ))
         }
      </div>
   )
}