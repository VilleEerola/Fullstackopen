import { useState } from 'react'


const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}



const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const handleClick = () => {
  const [value, setValue] = useState(0)
  console.log('clicked the button')
  setValue(0)
}


  const handleLeftClick = () => {
    setLeft(left + 1)
    setTotal(left + right)
  }


  const handleRightClick = () => {
    setRight(right + 1)
    setTotal(left + right)
  }

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        <button onClick={handleClick}>button</button>
        {right}
        <History allClicks={allClicks}/>
      </div>
    </div>
  )
}

export default App
