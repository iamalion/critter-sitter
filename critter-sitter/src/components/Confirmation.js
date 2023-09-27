import React, { useState } from "react"; 
import EditPetProfileForm from "./EditPetProfileForm";


function Confirmation({ petInfo, onEditClick }) {
    
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode(true)
    }

    if (editMode) {
        
    return (
        <>
        <EditPetProfileForm petInfo={petInfo} />
        </>
    )
    } else {

    return (
        <>
            <h2>Here's what we have so far:</h2>
            <img className="avatar" src={petInfo.avatar} alt="Selected Avatar"></img>
            <p>{petInfo.name} the {petInfo.species}</p>
            <p>Birthday: {petInfo.birthdayMonth}/{petInfo.birthdayYear}</p>
            <p>Microchip: {petInfo.microchip ? petInfo.microchip : `n/a`}</p>
            <p>Insurance: {petInfo.insuranceProvider ? petInfo.insuranceProvider : `n/a`}</p>
            <p>Fun Fact: {petInfo.funFact ? petInfo.funFact : `${petInfo.name} has so many fun facts I can't pick just one!`}</p>
             
        </>
        )
    }
}

export default Confirmation;