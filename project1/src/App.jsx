import './App.css'
import StudentCard from './components/StudentCard'

function App() {
const students = [
  {
    id:1,
    name:"Rahul",
    age:100,
    course:"Btech CSE"
  },
   {
    id:2,
    name:"Aman",
    age:102,
    course:"Btech AI"
  },
   {
    id:3,
    name:"Priya",
    age:103,
    course:"BCA"
  },
    {
    id:4,
    name:"Nahi Btaunga",
    age:104,
    course:"Kya karna"
  },
   {
    id:5,
    name:"Nahi Btaunga 2",
    age:105,
    course:"Kya karna hai"
  }, 
]

  return (
   <>
     <h1>Student List</h1>
     {

     students.map(student => (
       <StudentCard 
         name={student.name}
         age={student.age}
         course={student.course}
       />
     ))
    }
   </>
  )
}

export default App
