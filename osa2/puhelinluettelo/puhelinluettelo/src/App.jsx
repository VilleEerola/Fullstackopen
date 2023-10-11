import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
   const [newName, setNewName] = useState("")
   const [newNumber, setNewNumber] = useState("")
   const [filter, setFilter] = useState("")

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {name: newName, number: newNumber}

    if (persons.some((person)=> person.name === newName)){
      alert(`${newName} is already added to phonebook`)
  } else {
    setPersons(persons.concat(personObject))
  }
  setNewName("")
  setNewNumber("")
  }


  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          Filter shown with <input value = {filter} 
          onChange={(e) => setFilter(e.target.value)}/>
          <h2>Add a new</h2>
          Name: <input value={newName}
          onChange={handlePersonChange}
          />
          <br></br>
          Number: <input value={newNumber}
          onChange={handleNumberChange}
          />
          <br></br>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
  {persons
    .filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    )
    .map((person, index) => (
      <li key={index}>
        <div>{person.name}</div>
        <div>{person.number}</div>
      </li>
    ))}
</ul>
    </div>
  )

}

export default App