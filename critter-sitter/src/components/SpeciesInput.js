import React from 'react'

function SpeciesInput({ species, setSpecies, petInfo, setPetInfo}) {
    <p>Love it. And {petInfo.name} is a...</p>
    return (
        <>
        {/* <p>Love it. Is {petInfo.name} a cat or a dog?</p> */}
        <input
            type="radio"
            name="species"
            id="cat"
            value="cat"
            onChange={(e) => setSpecies(e.target.value)}
            checked={species === 'cat'}
        />
        <label htmlFor="cat">Cat</label>
        <input
            type="radio"
            name="species"
            id="dog"
            value="dog"
            onChange={(e) => setSpecies(e.target.value)}
            checked={species === 'dog'}
        />
        <label htmlFor="dog">Dog</label>
        </>
    )
}
export default SpeciesInput