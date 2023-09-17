import { useState } from 'react'

const Button = (props) => {
  console.log(props)
  return(
  <div>
    <p>
      <button onClick={props.handleClick}>
        {props.text}
      </button>
      <button onClick={props.handleClick2}>
        {props.text2}
      </button>
    </p> 
  </div>
  )
}

const Random = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (
      Math.floor(Math.random() * (max - min + 1)) + min
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]


   
  const [selected, setSelected] = useState(0)

  return (
    <div>
      {anecdotes[selected]}
      <Button handleClick = {() => setSelected(Random(0 , 7))} text="Next Anecdote" 
       text2 = "Vote Anecdote" />

    </div>
  )
}

export default App