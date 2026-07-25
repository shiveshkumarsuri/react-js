
function List(){
    const fruits = [{id:1, name:"Apple", calories:95},
                    {id:2, name: "Banana",calories:120},
                    {id:3, name:"Mango", calories:200},
                    {id:4, name:"Pineapple", calories:160},
                    {id:5, name:"Oranges", calories:150}];

    //fruits.sort((a,b)=> a.name.localeCompare(b.name)); //ALPHABETICAL
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)); //REVERSE-ALPHABETICAL
    fruits.sort((a,b)=> a.calories - b.calories); //NUMERIC SORT
    
    const lowCalFruits = fruits.filter(fruit => 
                                        fruit.calories <= 150
                                    );

    const listItems = lowCalFruits.map(fruit =>   
                                        <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b>
                                        </li>
                                );

    

    return(
        <ol>{listItems}</ol>
    );
}

export default List