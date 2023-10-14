
const PersonForm = ({ addPerson, newName, newNumber, 
    handlePersonChange, handleNumberChange }) => {
    return (
      <form onSubmit={addPerson}>
        <div>
          <h2>Add a new</h2>
          Name: <input value={newName} onChange={handlePersonChange} />
          <br />
          Number: <input value={newNumber} onChange={handleNumberChange} />
          <br />
          <button type="submit">Add</button>
        </div>
      </form>
    )
  }
  


export default PersonForm