import axios from 'axios'
const Persons = ({persons, filter, handleRemovePerson}) => {
  //communicates with filter and prints names/numbers on the screen
  // also handles person removing
  const handleRemoveClick = (id) => {
    if(window.confirm(`Do you really want delete this one?`)){
    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(() => {
        handleRemovePerson(id);
      })}
    }
  

    return (
        <ul>
  {persons
    .filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    )
    .map((person, index) => (
      <li key={index}>
        <p>{person.name} {person.number} <button
        style={{color:"red"}} onClick={() => handleRemoveClick(person.id)}>
        Remove</button></p>
      </li>
    ))}
</ul>
    )
  }





export default Persons