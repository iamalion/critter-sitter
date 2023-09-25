import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialPetInfo } from '../reducers/pet-info-reducer';

function PetProfileDetail(props){
    const { petProfile, onClickingDelete, onClickingEdit } = props;
    const [petInfo, dispatch] = useReducer(initialPetInfo, petProfile);

    return (
        <>
            <img className="avatar" src={petInfo.avatar} alt="Selected Avatar"></img>
            <h1>{petInfo.name} the {petInfo.species}</h1>
            <p>Birthday: {petInfo.birthdayMonth}/{petInfo.birthdayYear}</p>
            <p>Microchip: {petInfo.microchip ? petInfo.microchip : `n/a`}</p>
            <p>Insurance: {petInfo.insuranceProvider ? petInfo.insuranceProvider : `n/a`}</p>
            <p>Fun Fact: {petInfo.funFact ? petInfo.funFact : `${petInfo.name} has so many fun facts I can't pick one!`}</p>
            <button onClick={()=> onClickingEdit(petProfile.id)}>Update Pet Profile</button>
            <button onClick={()=> onClickingDelete(petProfile.id)}>Delete Pet Profile</button>
        </>
    )
}   

PetProfileDetail.propTypes = {
    petProfile: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
};

export default PetProfileDetail;