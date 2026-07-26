import React, {useState, useEffect} from 'react'

function UseEffectComponent(){

    const [count, setCount] = useState(0);

    useEffect(
        () => {
            document.title = `count: ${count}`
        },[count]
    )
    function addCount(){
        setCount(c => c + 1);
    }

    return(
        <div>
            <p> Count: {count}</p>
            <button onClick={addCount}> Add</button>
        </div>
    );

}
export default UseEffectComponent