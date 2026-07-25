import PropTypes from "prop-types";

function List(props){
    
    const {items = [], category = "Category"} = props;
    const itemList = [...items];

    //fruits.sort((a,b)=> a.name.localeCompare(b.name)); //ALPHABETICAL
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)); //REVERSE-ALPHABETICAL
    itemList.sort((a,b)=> a.calories - b.calories); //NUMERIC SORT
    
    const lowCalFruits = itemList.filter(fruit => 
                                        fruit.calories <= 150
                                    );

                        //List item with "KEY" for React to uniquely identify each list element
    const listItems = lowCalFruits.map(fruit =>   
                                        <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                        <b>{fruit.calories}</b>
                                        </li>
                                );
    return(<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </> 
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
                                id: PropTypes.number,
                                name: PropTypes.string,
                                calories: PropTypes.number
                             })),
}

export default List