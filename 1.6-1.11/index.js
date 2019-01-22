import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.clickHandler}>{props.text}</button>
    </div>
  )
}

const Statistic = (props) => {
  return (
    <div>
      <p> {props.value} </p>
    </div>
  )
}

const Statistics = ({ good, neutral, bad}) => {
  
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <td>hyvä</td>
            <td> <Statistic value={good}/> </td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td> <Statistic value={neutral}/> </td>
          </tr>
          <tr>
            <td>huono</td>
            <td> <Statistic value={bad}/> </td>
          </tr>
          <tr>
            <td>yhteensä</td>
            <td> <Statistic value={good + neutral + bad}/> </td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td> <Statistic value={(1 * good - 1 * bad) / (good + neutral + bad)}/> </td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td> <Statistic value={100 * good / (good + neutral + bad) + ' %'}/> </td>
          </tr>
          </tbody>
        </table>

      </div>
    )
  }

  return (
    <div>
      <p>Ei yhtään palautetta annettu</p>
    </div>
  )
}

const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodReview = () => {
    setGood(good + 1)
  }

  const handleNeutralReview = () => {
    setNeutral(neutral + 1)
  }

  const handleBadReview = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button clickHandler={handleGoodReview} text='hyvä'/>
      <Button clickHandler={handleNeutralReview} text='neutraali'/>
      <Button clickHandler={handleBadReview} text='huono'/>
      <h1>statistiikka</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))