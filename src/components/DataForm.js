import React, { useState } from 'react'

const DataForm = () => {

  const [students, setStudents] = useState([]); // initialize students as an empty array
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')

  const nameChange = (event) => {
    setName(event.target.value)
  }
  const addressChange = (event) => {
    setAddress(event.target.value)
  }
  const emailChange = (event) => {
    setEmail(event.target.value)
  }


  const handleSaveData = (event) => {
    event.preventDefault();

    // Check if all input fields are filled
  if (name && email && address) {
    // Save data to database or do other processing here
    const newStudent = { name, address, email }; // create a new student object using the form data
    // console.log(newStudent, students)
    // console.log(newStudent.name)
   
    setStudents([...students, newStudent]); // add the new student to the students array
    setName('');
    setAddress('');
    setEmail('');
  }
}

  return (
    <>
      <h1 className='text-center m-2'>Student Register System</h1>
      <div className='row'>
        <div className='col-6'>

          <form>
            <div className="form-outline mb-4">
              Name: <input type="text" name='name' value={name} onChange={nameChange} className="input1 form-control" required/>
            </div>
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              Email: <input type="email" name='email' value={email} onChange={emailChange} className="input1 form-control" required/>

            </div>

            {/* <!-- addtess input --> */}
            <div className="form-outline mb-4">
              Address: <input type="text" name='address' value={address} onChange={addressChange} className="input1 form-control" required/>

            </div>

            {/* <!-- Submit button --> */}
            <button className="btn btn-primary btn-block mb-4 center" type="button" onClick={handleSaveData} >Save Data</button>

          </form>
        </div>
        <div className='col-6'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default DataForm