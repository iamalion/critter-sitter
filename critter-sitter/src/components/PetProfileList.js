import React from "react";
import PropTypes from "prop-types";
import PetProfile from "./PetProfile";

function PetProfileList(props) {
    if (!props.petProfiles || props.petProfiles.length === 0) {
        return 
            <div>
                <h1>No pets here!</h1>
            </div>
    }

    return (
        <>
            <hr />
            {props.petProfiles.map((petProfile) => (
                <PetProfile
                    whenPetProfileClicked={props.onProfileSelection}
                    name={petProfile.name}
                    species={petProfile.species}
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