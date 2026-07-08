import './App.css'
import StudentCard from './components/StudentCard'

function App() {
 

  return (
   <>
     <StudentCard name="ravi" age={105} course="btech cse"/>
     <StudentCard name="ravi2" age={110} course="btech cse2"/>
     <StudentCard name="ravi3" age={111} course="btech cse3"/>
     <StudentCard name="ravi4" age={180} course="btech cse4"/>
     <StudentCard name="ravi5" age={190} course="btech cse5"/>
     {/* <StudentCard></StudentCard> */}
   </>
  )
}

export default App
