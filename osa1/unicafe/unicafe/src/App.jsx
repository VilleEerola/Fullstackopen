import { useState } from 'react'


const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p style = {{fontWeight: "bold", fontSize: 50, textAlign: 'center' }}>{props.header}</p>
    </div>
  )
}

const Header2 = (props) => {
  console.log(props)
  return (
    <div>
      <p style = {{fontWeight: "bold", fontSize: 50, textAlign: 'center' }}>{props.header2}</p>
    </div>
  )
}

const Button = (props) => {
  console.log(props)
  return(
  <div>
    <p style = {{textAlign: "center"}}>
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    </p> 
  </div>
  )
}

const Statistics = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 
  const all = (good + neutral + bad)
  const average = (good*1 + neutral*0 + bad*(-1)) / all
  const positive = ((good / all) * 100)

  const feedbackGiven = all > 0;
  console.log(props)
  return (
    <div>
    {feedbackGiven ? (
      <>
        <Statistics text = "Good" stats = {good}/>
        <Statistics text = "Neutral" stats = {neutral}/>
        <Statistics text = "Bad" stats = {bad}/>
        <Statistics text = "All" stats = {all}/>
        <Statistics text = "Average" stats = {average}/>
        <Statistics text = "Positive %" stats = {positive}/>
      </>
    ):(
      <p style={{textAlign: "center"}}>No Feedback Given</p>
    )}
    </div>
  )
}

const StatisticsLine = (props) => {
  console.log(props)
  return (
    <p style={{textAlign:"center"}}>{props.text} {props.stats}</p>
  )
}



const App = () => {
  const header = "Give Feedback"
  const header2 = "Statistics"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => {
    console.log('good now', newValue)
    setGood(newValue)
  }

  const setToNeutral = (newValue) => {
    console.log('neutral now', newValue)
    setNeutral(newValue)
  }

  const setToBad = (newValue) => {
    console.log('bad now', newValue)
    setBad(newValue)
  }
  
  return (
    <div>
      <Header header = {header}/>

      <Button handleClick = {() => setToGood(good + 1)} text="Good"/>
      <Button handleClick = {() => setToNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick = {() => setToBad(bad + 1)} text="Bad"/>

      <Header2 header2 = {header2}/>
        <Statistics />
    </div>
  )
}

export default App