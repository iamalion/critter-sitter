import React from 'react';

function MicrochipInput({ microchip, setMicrochip, petInfo }) {
    return (
        <>
        <label htmlFor="microchip">What is {petInfo.name}'s microchip number? <p>If they don't have one, or if you don't know, you can skip this step.</p></label>
            <input
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