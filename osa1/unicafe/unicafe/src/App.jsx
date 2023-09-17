import { useState } from 'react'


const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p style = {{fontWeight: "bold", fontSize: 50, textAlign: 'center' }}>{props.header}</p>
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
  
  console.log(props)
  return (
      <table>
        <StatisticsLine text1 = "Good" stats1 = {props.good}/>
        <StatisticsLine text2 = "Neutral" stats2 = {props.neutral}/>
        <StatisticsLine text3 = "Bad" stats3 = {props.bad}/>
        <StatisticsLine text4 = "All" stats4 = {props.all}/>
        <StatisticsLine text5 = "Average" stats5 = {props.average}/>
        <StatisticsLine text6 = "Positive %" stats6 = {props.positive}/>

        </table>
      
  )
}

const StatisticsLine = (props) => {
  console.log(props)
  return (
    <tbody>
      <tr>
      <th>{props.text1} {props.stats1}</th>
      </tr>
      <tr>
      <th>{props.text2} {props.stats2}</th>
      </tr>
      <tr>
      <th>{props.text3} {props.stats3}</th>
      </tr>
      <tr>
      <th>{props.text4} {props.stats4}</th>
      </tr>
      <tr>
      <th>{props.text5} {props.stats5}</th>
      </tr>
      <tr>
      <th>{props.text6} {props.stats6}</th>
      </tr>
    </tbody>
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

  const all = (good + neutral + bad)
  const average = (good*1 + neutral*0 + bad*(-1)) / all
  const positive = ((good / all) * 100)

  const feedbackGiven = all > 0
  
  return (
    <div>
      <Header header = {header}/>

      <Button handleClick = {() => setToGood(good + 1)} text="Good"/>
      <Button handleClick = {() => setToNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick = {() => setToBad(bad + 1)} text="Bad"/>

      <Header header = {header2}/>
      
      {feedbackGiven ? (
        <>
          <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all}
          average = {average} positive = {positive}/>
        </>
      ) : (
        <p style={{ textAlign: "center" }}>No feedback given</p>
      )}
      
    </div>
  )
}

export default App