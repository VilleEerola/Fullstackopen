const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p style = {{fontWeight: "bold", color: "red"}}>{props.course}</p>
    </div>
  )

}

const Content = (props) => {
  console.log(props)

  return (
    <div>
      <Part part1 = {props.parts[0].name} exercise1 = {props.parts[0].exercises}/>  
      <Part part2 = {props.parts[1].name} exercise2 = {props.parts[1].exercises}/> 
      <Part part3 = {props.parts[2].name} exercise3 = {props.parts[2].exercises}/> 
    </div>
  )

}

const Part = (props) => {
 console.log(props)
  return (
    <div>
      <p>{props.part1} {props.exercise1}</p>
      <p>{props.part2} {props.exercise2}</p>
      <p>{props.part3} {props.exercise3}</p>
    </div>
  )

}

const Total = (props) => {
  console.log(props)
  let exercise1 =  props.parts[0].exercises
  let exercise2 =  props.parts[1].exercises
  let exercise3 =  props.parts[2].exercises
  let totals = exercise1 + exercise2 + exercise3
  return (
    <div>
      <p>Total amount of exercises is {totals}</p>
    </div>
  )

}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App
