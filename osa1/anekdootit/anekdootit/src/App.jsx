import { useState } from 'react'


const Header = (props) => {
  console.log(props)
  return(
  <p style = {{fontWeight: "bold", fontSize: 30}}>{props.header}</p>
  )
}
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
  const header = "Anecdote of the day"
  const header2 = "Anecdote with most votes"


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

  

  const [votes, setVotes] = useState(new Uint32Array(anecdotes.length))
  const handleVotes = () => {
    const points = [...votes]
    points[selected] += 1
    setVotes(points)
  }
  const mostVotes = Math.max(...votes)
  const mostVotesAnecdote = votes.indexOf(mostVotes)
  
  return (
    <div>
      <Header header = {header}/>
      {anecdotes[selected]}
      <p>Has {votes[selected]} votes</p>
      <Button handleClick = {() => setSelected(Random(0 , 7))} text="Next Anecdote" 
      handleClick2 = {handleVotes} text2 = "Vote This Anecdote" />
      <Header header = {header2}/>
      {anecdotes[mostVotesAnecdote]}
      <p>Has {mostVotes} votes</p>
    </div>
  )
}

export default App