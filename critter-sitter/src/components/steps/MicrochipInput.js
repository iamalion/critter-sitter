import React from 'react';
import { CommonInput } from '../../styles/Container.style.js'

function MicrochipInput({ microchip, setMicrochip, petInfo }) {
    
    return (
        <>
            <CommonInput
                type="text"
                name="microchip"
                id="microchip"
                value={microchip}
                onChange={(e) => setMicrochip(e.target.value)}
            />
        </>
    )
}

export default MicrochipInput