import React from "react";
import PropTypes from "prop-types";
import PetProfile from "./PetProfile";
import { Card } from "../styles/Card.style.js"
import { Container } from "../styles/Container.style.js"

function PetProfileList(props) {
    if (!props.petProfiles || props.petProfiles.length === 0) {
        return (
            <Container>
                <h1>Here critter critter...!</h1>
            </Container>
        );
    }

    return (
        <>
        <Container>
        {props.petProfiles.map((petProfile) => (
          <div
            key={petProfile.id}
            onClick={() => props.onProfileSelection(petProfile.id)} 
          >
            <PetProfile
              name={petProfile.name}
              avatar={petProfile.avatar}
              id={petProfile.id}
            />
          </div>
        ))}
      </Container>
        </>
    );
}

PetProfileList.propTypes = {
    petProfiles: PropTypes.array,
    onProfileSelection: PropTypes.func
};

export default PetProfileList;