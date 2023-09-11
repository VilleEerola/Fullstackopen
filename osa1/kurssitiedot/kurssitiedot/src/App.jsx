const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )

}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Part part1 = {part1} exercises1 = {exercises1}/>
      <Part part1 = {part2} exercises1 = {exercises2}/>
      <Part part1 = {part3} exercises1 = {exercises3}/>
    </div>
  )

}

const Part = (props) => {
 console.log(props)
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part2} {props.exercises3}</p>
    </div>
  )

}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )

}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content/>
      <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
