import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1> {props.course} </h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part1={props.part1} exercises1={props.exercises1} />
            <Part part2={props.part2} exercises2={props.exercises2} />
            <Part part3={props.part3} exercises3={props.exercises3} />
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p> {props.part1} {props.exercises1} </p>
            <p> {props.part2} {props.exercises2} </p>
            <p> {props.part3} {props.exercises3} </p>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>  
            <p> yhteensä {props.exercises1 + props.exercises2 + props.exercises3} tehtävää </p> 
        </div>
    )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

