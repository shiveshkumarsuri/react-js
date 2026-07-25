import React, {useState} from 'react';

function MyComponent(){

    
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [employeed, setIsEmployeed] = useState(false);

    const updateName = () =>{
        setName("Shivesh");
    }
    const incrementAge = () =>{
        setAge(age +1);
    }

    const toogleIsEmployeed = () => {
        setIsEmployeed(!employeed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age:{age}</p>
            <button onClick={incrementAge}>Increase Age</button>
            <p>Is Employyed:{employeed ? "Yes" : "No"}</p>
            <button onClick={toogleIsEmployeed}>Toggle Employement</button>
        </div>
    );
}

export default MyComponent