import React from "react";
import PropTypes from "prop-types";
import PetProfile from "./PetProfile";

function PetProfileList(props) {

    if (!props.petProfiles || props.petProfiles.length === 0) {
        return (
            <div>
                <h1>Calling critters... here critter critter!</h1>
            </div>
        );
    }
    return (
        <>
            {props.petProfiles.map((petProfile) => (
                <PetProfile
                    whenPetProfileClicked={() => props.onProfileSelection(petProfile.id)}
                    avatar={petProfile.avatar}
                    name={petProfile.name}
                    id={petProfile.id}
                    key={petProfile.id}
                />
            ))}
        </>
    );
}

PetProfileList.propTypes = {
    petProfiles: PropTypes.array,
    onProfileSelection: PropTypes.func
};

export default PetProfileList;