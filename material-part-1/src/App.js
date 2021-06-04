import React, { useState } from 'react';

// const Display = ({counter}) => {
//     return (
//         <div>{counter}</div>
//     )
// }
const Display = ({counter}) => <div>{counter}</div>


// const Button = ({handleClick, text}) => {
//     return (
//         <button onClick={handleClick}>
//             {text}
//         </button>
//     )
// }
const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = (props) => {

    const [counter, setCounter] = useState(100)

    // setTimeout(
    //     () => setCounter(counter + 1),
    //     1000
    // )

    // const handleClick = () => {
    //     console.log('clicked')
    // }

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)


    return (
        <div>
            <Display counter={counter} />
            <Button handleClick={increaseByOne} text='plus' />
            <Button handleClick={setToZero} text='zero' />
            <Button handleClick={decreaseByOne} text='minus' />
        </div>
    )
}

export default App;
