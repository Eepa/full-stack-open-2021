import React, {useState} from 'react'

const Person = ( {person} ) => {
    return (
        <p>{person.name}</p>
    )
}


const App = () => {
    const [ persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [ newName, setNewName ] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName
        }

        setPersons(persons.concat(newPerson))
        setNewName('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input value={newName}
                    onChange={handleNameChange}/>
                </div>
                <div>
                    <button type="submit"
                            onClick={addName}>
                        add
                    </button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {
                    persons.map(person =>
                        <Person key={person.name} person={person} />
                    )
                }

            </div>
        </div>
    )

}

export default App