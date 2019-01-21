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
            <Part part1={props.part1.name} exercises1={props.part1.exercises} />
            <Part part2={props.part2.name} exercises2={props.part2.exercises} />
            <Part part3={props.part3.name} exercises3={props.part3.exercises} />
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
            <p> yhteensä {props.part1.exercises + props.part2.exercises + props.part3.exercises} tehtävää </p> 
        </div>
    )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = {
      name: 'Reactin perusteet',
      exercises: 10
  }
  const part2 = {
    name: 'Tiedonvälitys propseilla',
    exercises: 7
  }
  const part3 = {
    name: 'Komponenttien tila',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))