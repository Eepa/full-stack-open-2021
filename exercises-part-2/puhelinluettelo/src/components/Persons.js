import React from "react";
import Person from './Person'

const Persons = ( {persons, filter} ) => {

    const personsToShow = persons.filter(person =>
        person.name.toLowerCase()
            .indexOf(filter.toLowerCase()) !== -1)

    return (
        <div>
            {
                personsToShow.map(person =>
                    <Person key={person.name} person={person} />
                )
            }

        </div>
    )
}

export default Persons
