import React, { useState } from 'react'

const Title = ({text}) => {
    return (
        <>
            <h1>{text}</h1>
        </>
    )
}

const Button = ({text, handleClick}) => {
    return (
        <>
            <button onClick={handleClick}>{text}</button>
        </>
    )
}

const Statistics = ({good, neutral, bad}) => {
    return (
        <div>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
        </div>
    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Title text="Give feedback" />
            <Button text="good" handleClick={() => setGood(good + 1)}/>
            <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
            <Button text="bad" handleClick={() => setBad(bad + 1)} />
            <Title text="Statistics" />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App
