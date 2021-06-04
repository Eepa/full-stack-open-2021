import React from "react";

const Course = ({course}) =>  (
    <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
)

const Header = ({name}) => (
    <>
        <h1>{name}</h1>
    </>
)

const Part = ({part}) => (
    <>
        <p>
            {part.name} {part.exercises}
        </p>
    </>
)


const Total = ({parts}) => {

    const sumOfExercises = parts.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)

    return (
        <>
            <p><strong>Total of {sumOfExercises} exercises</strong></p>
        </>
    )
}

const Content = ({parts}) => (
    <div>
        {parts.map(part =>
            <Part key={part.id} part={part} />
        )}

    </div>
)


const App = () => {
    const course = {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Testing part',
                exercises: 10,
                id: 4
            }
        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )
}

export default App;
