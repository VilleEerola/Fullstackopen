import { useState, useEffect } from 'react'
import personService from './services/person'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
   const [newName, setNewName] = useState("")
   const [newNumber, setNewNumber] = useState("")
   const [filter, setFilter] = useState("")


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
    // adds new person and/or number, if already added, gives alert
    
  if (persons.some((person)=> person.name === newName)){
    alert(`${newName} is already added to phonebook`)
  } else {
    personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName("")
        setNewNumber("")
      })
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

      <h2>Numbers</h2>

      <Persons persons={persons} filter={filter} 
      handleRemovePerson={removePerson}/>
    </div>
  )

}

export default App