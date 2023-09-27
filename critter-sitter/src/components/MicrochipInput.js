import React from 'react';

function MicrochipInput({ microchip, setMicrochip, petInfo }) {
    
    return (
        <>
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