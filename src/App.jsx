import List from './List.jsx'

function App() {
  const fruits = [{id:1, name:"Apple", calories:95},
                    {id:2, name: "Banana",calories:120},
                    {id:3, name:"Mango", calories:200},
                    {id:4, name:"Pineapple", calories:160},
                    {id:5, name:"Oranges", calories:150}];

  const vegetables = [{id:6, name:"Potatoes", calories:120},
                    {id:7, name: "Celery",calories:50},
                    {id:8, name:"Okra", calories:100},
                    {id:9, name:"Cucumber", calories:60},
                    {id:10, name:"Peas", calories:150}];

  return(
    <>
    {fruits.length > 0 &&  <List items={fruits}  />}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  );
}
export default App
