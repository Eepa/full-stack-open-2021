import React from "react";

const PersonForm = ( {name, handleNameChange, number, handleNumberChange, addPerson} ) => {
    return (
        <form>
            <div>
                Name:
                <input value={name}
                       onChange={handleNameChange}/>
            </div>
            <div>
                Number:
                <input value={number}
                       onChange={handleNumberChange}/>
            </div>
            <div>
                <button type="submit"
                        onClick={addPerson}>
                    Add
                </button>
            </div>
        </form>

    )
}

export default PersonForm
