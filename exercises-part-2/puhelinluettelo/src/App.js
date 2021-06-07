import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personService from "./services/persons";

const App = () => {
    const [persons, setPersons] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ nameFilter, setNameFilter ] = useState('')
    const [ notification, setNotification] = useState(null)

    useEffect(() => {
        personService
            .getAll()
            .then(allPersons => setPersons(allPersons))
    }, [])


    const addPerson = (event) => {
        event.preventDefault()
        const personNames = persons.map(person => person.name)

        if (personNames.indexOf(newName) === -1) {
            const newPerson = {
                name: newName,
                number: newNumber
            }

            personService
                .create(newPerson)
                .then(returnedPerson => {
                    setNotification(
                        {
                            message: `Added ${returnedPerson.name}`,
                            type: 'info'
                        }
                    )
                    setTimeout(() => {
                        setNotification(null)
                    }, 5000)
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })
        } else {

            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {

                const person = persons.find(p => p.name === newName)
                const changedPerson = {...person, number: newNumber}

                personService
                    .update(changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
                        setNewName('')
                        setNewNumber('')
                    })
                    .catch(error => {
                         setNotification(
                            {
                                message: `Information of ${newName} has already been removed from server`,
                                type: 'error'
                            }
                        )
                        setTimeout(() => {
                            setNotification(null)
                        }, 5000)
                        setPersons(persons.filter(p => p.name !== newName))
                    })
            }
        }
    }

    const removePerson = (person) => {

        if (window.confirm(`Delete ${person.name}?`)) {
            personService
                .remove(person.id)
                .then(response => {
                    setPersons(persons.filter(p => p.id !== person.id))
                })
                .catch(error => {
                    setNotification(
                        {
                            message: `Information of ${person.name} has already been removed from server`,
                            type: 'error'
                        }
                    )
                    setTimeout(() => {
                        setNotification(null)
                    }, 5000)
                    setPersons(persons.filter(p => p.id !== person.id))
                })
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

            <Notification notification={notification} />

            <Filter filter={nameFilter} handleFilterChange={handleNameFilterChange} />

            <h2>Add a new</h2>

            <PersonForm
                name={newName}
                handleNameChange={handleNameChange}
                number={newNumber}
                handleNumberChange={handleNumberChange}
                addPerson={addPerson}
            />

            <h2>Numbers</h2>

            <Persons persons={persons} personFilter={nameFilter} removePerson={removePerson} />
        </div>
    )

}

export default App