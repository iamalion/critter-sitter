import React, { useState } from 'react'
import PetProfile from './PetProfile'
import PetProfileList from './PetProfileList'

function PetProfileControl() {
    const [petProfiles, setPetProfiles] = useState([])

    return (
        <div>
            <PetProfileList petProfiles={petProfiles} setPetProfiles={setPetProfiles} />
            <PetProfile petProfiles={petProfiles} setPetProfiles={setPetProfiles} />
        </div>
    );
}

export default PetProfileControl