import React from "react";
import PropTypes from "prop-types";
import PetProfile from "./PetProfile";
import PetProfileControl from "./PetProfileControl";

function PetProfileList(props) {
    return (
        <>
            {Object.values(props.petProfiles).map((petProfile) => {
                return <PetProfile
                    whenProfileClicked={props.onProfileSelection}
                    name={petProfile.name}
                    species={petProfile.species}
                    birthdayMonth={petProfile.birthdayMonth}
                    birthdayYear={petProfile.birthdayYear}
                    microchip={petProfile.microchip}
                    insuranceSelect={petProfile.insuranceSelect}
                    insuranceProvider={petProfile.insuranceProvider}
                    funFact={petProfile.funFact}
                    id={petProfile.id}
                    key={petProfile.id}
                />
            }
         )}
        </>
    );
}

PetProfileList.propTypes = {
    petProfiles: PropTypes.object,
    onProfileSelection: PropTypes.func
};

export default PetProfileList;