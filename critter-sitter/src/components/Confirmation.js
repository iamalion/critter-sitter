import React from "react"; 

function Confirmation({ petInfo }) {
    return (
        <>
        <h2>Here's what we have so far:</h2>
        <img className="avatar" src={petInfo.avatar} alt="Selected Avatar"></img>
            <p>{petInfo.name} the {petInfo.species}</p>
            <p>Birthday: {petInfo.birthdayMonth}/{petInfo.birthdayYear}</p>
            <p>Microchip: {petInfo.microchip ? petInfo.microchip : `n/a`}</p>
            <p>Insurance: {petInfo.insuranceProvider ? petInfo.insuranceProvider : `n/a`}</p>
            <p>Fun Fact: {petInfo.funFact ? petInfo.funFact : `${petInfo.name} has so many fun facts I can't pick one!`}</p>
            <p>If this is correct, go ahead and click submit! (Don't worry, you can alway update things later!)</p>
            <button type="submit">Submit</button>
        </>
    )
}

export default Confirmation;