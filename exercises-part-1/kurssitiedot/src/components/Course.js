import React from 'react'

const Header = ({name}) => (
    <>
        <h2>{name}</h2>
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

const Course = ({course}) =>  (
    <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
)

export default Course