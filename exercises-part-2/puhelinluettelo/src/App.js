import React, {useState} from 'react'

const Person = ( {person} ) => {
    return (
        <p>{person.name} {person.number}</p>
    )
}


const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ nameFilter, setNameFilter ] = useState('')

    const personsToShow = persons.filter(person =>
        person.name.toLowerCase()
        .indexOf(nameFilter.toLowerCase()) !== -1)

    const addName = (event) => {
        event.preventDefault()
        const personNames = persons.map(person => person.name)

        if (personNames.indexOf(newName) === -1) {
            const newPerson = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
        } else {
            alert(`${newName} is already added to phonebook`)
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleNameFilterChange = (event) => {
        setNameFilter(event.target.value)
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                Filter shown with:
                <input value={nameFilter}
                       onChange={handleNameFilterChange}/>
            </div>

            <h2>Add a new</h2>
            <form>
                <div>
                    Name:
                    <input value={newName}
                           onChange={handleNameChange}/>
                </div>
                <div>
                    Number:
                    <input value={newNumber}
                           onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit"
                            onClick={addName}>
                        Add
                    </button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {
                    personsToShow.map(person =>
                        <Person key={person.name} person={person} />
                    )
                }

            </div>
        </div>
    )

}

export default App