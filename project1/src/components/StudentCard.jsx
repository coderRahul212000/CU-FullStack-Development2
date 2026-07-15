import React from 'react'

const StudentCard = (prop) => {
  return (
    <div>
        <h1>Student Details</h1>
        <p><strong>Name:</strong>{prop.name}</p>
        <p><strong>Age:</strong>{prop.age}</p>
        <p><strong>Course:</strong>{prop.course}</p>
    </div>
  )
}

export default StudentCard