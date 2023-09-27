import React from 'react'

function SpeciesInput({ species, setSpecies, petInfo, setPetInfo}) {
    return (
        <>       
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