import UserGreetings from './UserGreetings.jsx'

function App() {
  return(
    <>
      <UserGreetings isLoggedIn={true} userName="Shivesh" />
      <UserGreetings isLoggedIn={true}  />
    </>
  );
}
export default App
