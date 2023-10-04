import React from 'react'
import { RadioLabel, RadioButton } from '../../styles/Radio.style'
import { ContainerRow } from '../../styles/Container.style'

function SpeciesInput({ species, setSpecies}) {
    return (
        <>
        <ContainerRow>
        <RadioLabel>      
            <RadioButton
                type="radio"
                name="species"
                id="cat"
                value="cat"
                onChange={(e) => setSpecies(e.target.value)}
                checked={species === 'cat'}
            />
        Cat</RadioLabel>
        
        <RadioLabel> 
            <RadioButton
                type="radio"
                name="species"
                id="dog"
                value="dog"
                onChange={(e) => setSpecies(e.target.value)}
                checked={species === 'dog'}
            />
        Dog</RadioLabel>
        </ContainerRow>
        
        </>
    )
}
export default SpeciesInput