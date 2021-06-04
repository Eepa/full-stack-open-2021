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

const StatisticsLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const allCount = good + neutral + bad
    const positivePercent = good/ allCount * 100;

    if (allCount <= 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <table>
            <tbody>
                <StatisticsLine text="Good" value={good} />
                <StatisticsLine text="Neutral" value={neutral} />
                <StatisticsLine text="Bad" value={bad} />
                <StatisticsLine text="All" value={allCount} />
                <StatisticsLine text="Average" value={(good + bad * -1)/ allCount} />
                <StatisticsLine text="Positive" value={positivePercent + " %"} />
            </tbody>
        </table>
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
