import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    
    const incrementCount = () =>{
        setCount(count + 1);
    }

    const decrementCount = () =>{
        setCount(count - 1);
    }

     const resetCount = () =>{
        setCount(0);
    }
    
    return(
        <div className="counter-container">
            <p className="counter-display"> Count: {count}</p>
            <button className="counter-button" onClick={incrementCount}>Increment</button>
            <button className="counter-button" onClick={decrementCount}>Decrement</button>
            <button className="counter-button" onClick={resetCount}>Reset</button>
        </div>
        
    )
}

export default Counter