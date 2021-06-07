import React from "react";
import Person from './Person'

const Persons = ( {persons, personFilter, removePerson} ) => {

    const personsToShow = persons.filter(person =>
        person.name.toLowerCase()
            .indexOf(personFilter.toLowerCase()) !== -1)

    return (
        <div>
            {
                personsToShow.map(person =>
                    <Person key={person.id} person={person} removePerson={() => removePerson(person)} />
                )
            }

        </div>
    )
}

export default Persons
