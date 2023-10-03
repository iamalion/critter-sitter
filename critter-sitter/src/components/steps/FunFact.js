import React from 'react';
import { CommonInput } from '../../styles/Container.style.js'

function FunFact({ funFact, setFunFact, petInfo }) {
    
    return ( 
        <>
        <CommonInput
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