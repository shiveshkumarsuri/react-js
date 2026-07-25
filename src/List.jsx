function List(){
    const fruits = ["Apple","Banana","Mango","Grapes"];
    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return(<ol>{listItems}</ol>);
}

export default List