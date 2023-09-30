import React from 'react';

function FunFact({ funFact, setFunFact, petInfo }) {
    
    return ( 
        <>
        <input
            type="longtext"
            name="funFact"
            id="funFact"
            value={funFact}
            onChange={(e) => setFunFact(e.target.value)}
        />
        </>
    )
}

export default FunFact;