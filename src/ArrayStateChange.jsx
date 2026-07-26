import React, {useState} from 'react';

function ArrayStateChange(){

    const [fruits, setFruits] = useState(["Apple","Banana","Mango"]);

    function handleAddFruit(){
        const newFruit = document.getElementById("addfood").value;
        document.getElementById("addfood").value = "";
        setFruits(f => [...f,newFruit ]);
    }

    function handleDeleteFruit(index){
        setFruits(fruits.filter((_,i)=> i !== index));
    }
    return (
        <div>
            <h2>List of Fruits:</h2>
            <ul>
                {fruits.map((fruit, index) =>
                    <li key={index} onClick={() => handleDeleteFruit(index)}>
                        {fruit}
                    </li>
                )}
            </ul>
            <input type="text" id="addfood" placeholder='Enter a Fruit'/>
            <button onClick={handleAddFruit}>Add Food</button>
        </div>
    );
}
 export default ArrayStateChange