const Header = (props) => {
    console.log(props)
    return (
      <div>
        <p style = {{fontWeight: "bold", color: "red", fontSize: 25}}>{props.course}</p>
      </div>
    )
  
  }
  
  const Content = (props) => {
    console.log(props)
  
    const partComponents = props.parts.map((part,index) => (
      <Part key = {index} part = {part.name} exercise = {part.exercises}/>
    ));
  
    return (
      <div>
        {partComponents}
      </div>
    )
  
  }
  
  const Part = (props) => {
   console.log(props)
    return (
      <div>
        <p>{props.part} {props.exercise}</p>
      </div>
    )
  
  }
  
  const Total = (props) => {
    console.log(props)
    const totalAmount = props.parts.reduce((total, part) => total + part.exercises, 0);
    return (
      <div>
        <p style={{fontWeight: "bold", fontSize: 20}}>Total amount of exercises is {totalAmount}</p>
      </div>
    )
  
  }
   
  
  const Course = (props) => {
    console.log(props)
    return (
      <div>
      <Header course = {props.course.name}/>
      <Content parts = {props.course.parts}/>
      <Total parts = {props.course.parts}/>
      </div>
    )
  
  }

  export default Course