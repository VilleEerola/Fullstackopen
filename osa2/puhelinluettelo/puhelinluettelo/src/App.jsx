import { useState, useEffect } from 'react'
import personService from './services/person'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Alert from './Components/Alert'
import Error from './Components/Error'


const App = () => {
  const [persons, setPersons] = useState([]) 
   const [newName, setNewName] = useState("")
   const [newNumber, setNewNumber] = useState("")
   const [filter, setFilter] = useState("")
   const [alertMessage, setAlertMessage] = useState(null)
   const [errorMessage, setErrorMessage] = useState(null)


  // gets the data from the server, uses person.js
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  console.log("render", persons.length, "persons")

  

  
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {name: newName, number: newNumber}
    const existingPerson = persons.find((person) => person.name === newName)
    // adds new person and/or number, if already added, gives alert
    
  if (persons.some((person)=> person.name === newName && person.number === newNumber)){
    alert(`${newName} ${newNumber} is already added to phonebook`)

  } else if (existingPerson){

      if(window.confirm(`${newName} is already added to phonebook,
      do you want to replace the old number?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber }
        personService
        .update(existingPerson.id, updatedPerson)
        .then((response) => {
          setPersons(persons.map((person) =>(person.id !== existingPerson.id ? person : response.data)))
          setAlertMessage(
            `Updated ${newName}'s number`
          )
          setTimeout(() => {
            setAlertMessage(null)
          }, 5000)
        })
        .catch((error) => {
          setErrorMessage(`${newName} was already removed from the server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }

  }else {
    personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName("")
        setNewNumber("")
      })
      .catch
      setAlertMessage(
        `Added ${newName}`
      )
      setTimeout(() => {
        setAlertMessage(null)
      }, 5000)
      
  }

  }


  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

    // when pressing removebutton, removes name from the server, gives confirmation alert
  const removePerson = (id) => {
    const updatedPersons = persons.filter((person) => person.id !== id)
    setPersons(updatedPersons)
    personService
    .catch
      setAlertMessage(
        `Remove succesful!`
      )
      setTimeout(() => {
        setAlertMessage(null)
      }, 5000)
  }

  

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} setFilter={setFilter}/>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}/>

        <br></br>

      <Alert message={alertMessage}/>
      <Error message={errorMessage}/>
      <h2>Numbers</h2>

      <Persons persons={persons} filter={filter} 
      handleRemovePerson={removePerson}/>
    </div>
  )

}

export default App