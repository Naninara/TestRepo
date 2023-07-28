import React,{useState} from 'react';
const Counter1 = () => {
    let [counter, setCounter] = useState(0)
    //let [counter,updateCounter] = useState(0)    
    
    return (
        <>
            <h1>Counter Value : {counter}</h1>
            <button onClick={() =>setCounter(++counter)}>Counter</button>
        </>
    )
}
export default Counter1;