import React from 'react';

function FunFact({ funFact, setFunFact, petInfo }) {
    return (
        <>
        <label htmlFor="funFact">Tell us a fun fact about {petInfo.name}!</label>
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