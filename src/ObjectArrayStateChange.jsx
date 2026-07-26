import React, {useState} from 'react'


function ObjectArrayStateChange(){
    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("BMW");
    const [carModel, setModel] = useState("530i");

    function handleAddCar(){
        const newCar = {year:carYear, make:carMake, model:carModel};
        setCars(c => [...c, newCar]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");

    }
    function handleCarRemove(index){
        setCars(c => c.filter((_,i) => i !== index ));
    }

    function handleYearChange(event){
        setYear(event.target.value);
    }
     function handleMakeChange(event){
        setMake(event.target.value);
    }
     function handleModelChange(event){
        setModel(event.target.value);
    }


    return(
        <div>
            <h2>List of Cars:</h2>
            <ul>
                {cars.map((car, index)=>
                    <li key={index} 
                    onClick={() => handleCarRemove(index)}>
                        {car.year}
                        {car.make}
                        {car.model}
                    </li>)
                }
            </ul>
            <input type="number" id="carYear" value={carYear} onChange={handleYearChange}/><br/>
            <input type="text" id="carMake" value={carMake} onChange={handleMakeChange}
                placeholder='Enter Car Make'/> <br/>
            <input type="text" id="carModel" value={carModel} onChange={handleModelChange}
                placeholder='Enter Model'/> <br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );

}

export default ObjectArrayStateChange