import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Stat = (props) => (
  <p>{props.text} {props.value}</p>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const Total = good + bad + neutral

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good+1)} text="Good"/>
      <Button onClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button onClick={() => setBad(bad+1)} text="Bad"/>
      <h2>Statistics</h2>
      <Stat text="Good" value={good}/>
      <Stat text="neutral" value={neutral}/>
      <Stat text="Bad" value={bad}/>
      <Stat text="All" value = {Total}/>
      <Stat text="Average" value={((good*1)+(neutral*0)+(bad*-1))/Total}/>
      <Stat text="Positive" value={good/Total*100}/>
    </div>
  )
}

export default App