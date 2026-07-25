import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name="Shivesh" age={30} isMarried={true}/>
      <Student name="Rocky" age={28} isMarried={false} />
      <Student name="Esha" age={27} isMarried={true} />
      <Student />
    </>
  );
}
export default App
