import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,reset} from './redux/Counter/counterSlice'

function Counter() {

   const dispatch=useDispatch()
   const count=useSelector((state)=>state.counter.count)

  return (

    <div>
      <h2>Redux Counter</h2>

      <h3>{count}</h3>

      <button onClick={()=>dispatch( increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Rest</button>
      
    </div>
  )
}

export default Counter
