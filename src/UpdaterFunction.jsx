import React, {useState} from 'react'

function UpdaterFunction(){
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(c => c + 1);
    }
    function decrement(){
        setCounter(c => c - 1);
    }
    function reset(){
        setCounter(c => c = 0);
    }
    return(
        <div>
            <p>Count: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );

}

export default UpdaterFunction