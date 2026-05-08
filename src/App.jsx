
import Students from "./student.jsx";

function App() {
  return (
    <>
      <Students name="enock" age={30} isStudent={true} />
      <Students name="spongebob" age={20} isStudent={true} />
      <Students name="Patrick" age={18} isStudent={false}/>
      <Students />

      <Students></Students>
    </>
  );
}


export default App

//protoypte =is mechaism that ensure that the passed vaue 
//is of the correct datatypr