import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()

    if (firstName.length > 0 && lastName.length > 0){
    const formData = {firstName: firstName, lastName: lastName}
    const dataArray = [...submittedData, formData]
    setSubmittedData(dataArray)
    setFirstName('')
    setLastName('')
    setErrors([])
    } else if (lastName.length > 0){
      setErrors(["First Name is Required!"])
    } else if (firstName.length > 0){
      setErrors(["Last Name is Required!"])
    } else {
      setErrors(["Please enter your full name"])
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key = {index}>
          {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <div>
    <form onSubmit = {handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    {errors.length > 0 ?
    errors.map((error, index) => (
      <p key={index} style={{color: "red"}}>
        {error}
      </p>
        )) :
        null}
    </form>
    <h3>Submissions:</h3>
    {listOfSubmissions}
    </div>
  );
}

export default Form;
