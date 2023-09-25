import React from 'react'
import NameInput from './NameInput'

function SpeciesInput({ species, setSpecies, petInfo, setPetInfo}) {
    return (
        <>
        <p>Love it. Is {petInfo.name} a cat or a dog?</p>
        <input
            type="radio"
            name="species"
            id="cat"
            value="cat"
            onChange={(e) => setSpecies(e.target.value)}
            checked={species === 'cat'}
        />
        <label htmlFor="cat">Meow!</label>
        <input
            type="radio"
            name="species"
            id="dog"
            value="dog"
            onChange={(e) => setSpecies(e.target.value)}
            checked={species === 'dog'}
        />
        <label htmlFor="dog">Woof!</label>
        </>
    )
}
export default SpeciesInput