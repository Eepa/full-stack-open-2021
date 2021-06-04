import React, { useState } from 'react'

const Button = ({text, handleClick}) => {
    return (
        <>
            <button onClick={handleClick}>{text}</button>
        </>
    )
}

const Title = ({text}) => {
    return (
        <>
            <h1>{text}</h1>
        </>
    )
}

const AnecdoteWithVote = ({anecdote, votes}) => {
    return (
        <>
            <p>{anecdote}</p>
            <p>has {votes} votes</p>
        </>
    )
}

const RandomAnecdote = ({anecdotes, points, setPoints, selected, setSelected}) => {
    const getNextSelected = () => {
        return Math.floor(Math.random() * anecdotes.length)
    }

    const updatePoints = () => {
        const copy = [...points]
        copy[selected] = copy[selected] + 1
        setPoints(copy)
    }

    return (
        <div>
            <AnecdoteWithVote anecdote={anecdotes[selected]} votes={points[selected]}/>
            <Button text="Vote" handleClick={updatePoints} />
            <Button text="Next anecdote" handleClick={() => setSelected(getNextSelected())} />
        </div>
    )
}

const PopularAnecdote = ({anecdotes, points}) => {
    const indexOfMaxPoints = points.indexOf(Math.max(...points));

    return (
        <div>
            <AnecdoteWithVote anecdote={anecdotes[indexOfMaxPoints]} votes={points[indexOfMaxPoints]}/>
        </div>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
    ]

    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))


    return (
        <div>
            <Title text="Anecdote of the day" />
            <RandomAnecdote anecdotes={anecdotes}
                            points={points}
                            setPoints={setPoints}
                            selected={selected}
                            setSelected={setSelected}
            />

            <Title text="Anecdote with most votes" />

            <PopularAnecdote anecdotes={anecdotes} points={points}/>

        </div>
    )
}

export default App