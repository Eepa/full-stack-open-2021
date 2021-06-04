import React, { useState } from 'react';


const Hello = ({name, age}) => {
    // const { name, age } = props

    // const bornYear = () => {
    //     const yearNow = new Date().getFullYear()
    //     return yearNow - props.age
    // }

    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born on {bornYear()}</p>
        </div>
    )
}


const App = (props) => {
    const name = 'Pekka'
    const age = 10
    const {counter} = props

    // console.log('Hello from component')
    // return (
    //     <div>
    //         <h1>Greetings</h1>
    //         <Hello name="Maya" age={26 + 10}/>
    //         <Hello name={name} age={age}/>
    //         <Hello />
    //     </div>
    // )
    return (
        <div>{counter}</div>
    )
}

export default App;
