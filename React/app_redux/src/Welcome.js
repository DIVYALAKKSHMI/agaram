
import { increment,decrement, incrementByAmount } from "./Slice/counterSlice"

import { useSelector,useDispatch } from "react-redux"

// import counterSlice from "./Slice/counterSlice"

function Welcomepg(){

    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    return(
        <>
        <button type="button" onClick={()=>dispatch(increment())}>increment +1</button>
           <h2>Welcome,{count} </h2>
        <button type="button" onClick={()=>dispatch(decrement())}>decrement -1</button>
        <button type="button" onClick={()=>dispatch(incrementByAmount(100))}>increment by amount</button>
        </>
    )
}

export default Welcomepg    