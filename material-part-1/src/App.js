// import react from 'react';


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const App = () => {
  const name = 'Pekka'
  const age = 10

  console.log('Hello from component')
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10}/>
      <Hello name={name} age={age}/>
      <Hello />
    </div>
    )
  }
  
  export default App;