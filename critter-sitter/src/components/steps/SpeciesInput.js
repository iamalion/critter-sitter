import React from 'react'
import { RadioButton, RadioLabel } from '../../styles/Radio.style.js'

function SpeciesInput({ species, setSpecies}) {
    return (
        <>       
        <RadioButton
            type="radio"
            name="species"
            id="cat"
            value="cat"
            onChange={(e) => setSpecies(e.target.value)}
            checked={species === 'cat'}
        />
        <RadioLabel htmlFor="cat"><span>Cat</span></RadioLabel>
        <RadioButton
            type="radio"
            name="species"
            id="dog"
            value="dog"
            onChange={(e) => setSpecies(e.target.value)}
            checked={species === 'dog'}
        />
        <RadioLabel htmlFor="dog"><span>Dog</span></RadioLabel>
        </>
    )
}
export default SpeciesInput