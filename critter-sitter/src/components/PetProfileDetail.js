import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialPetInfo } from '../reducers/pet-info-reducer';
import { Card } from '../styles/Card.style.js';
import { ButtonContainer, SmallButton } from '../styles/Button.style.js';
import { AvatarName } from '../styles/Avatar.style.js';
import { Paragraph } from '../styles/Paragraph.style.js';

function PetProfileDetail(props){
    const { petProfile, onClickingDelete, onClickingEdit } = props;
    const [petInfo, dispatch] = useReducer(initialPetInfo, petProfile);

    return (
        <>
        <Card>
            <img className="avatar" src={petInfo.avatar} alt="Selected Avatar"></img>
            <AvatarName>{petInfo.name} the {petInfo.species}</AvatarName>
            <Paragraph>{petInfo.funFact ? petInfo.funFact : `${petInfo.name} has so many fun facts I can't pick one!`}</Paragraph>
            <Paragraph>Birthday: {petInfo.birthdayMonth}/{petInfo.birthdayYear}</Paragraph>
            <Paragraph>Microchip: {petInfo.microchip ? petInfo.microchip : `n/a`}</Paragraph>
            <Paragraph>Insurance: {petInfo.insuranceProvider ? petInfo.insuranceProvider : `n/a`}</Paragraph>
            </Card>
            <ButtonContainer>            <SmallButton onClick={()=> onClickingEdit(petProfile.id)}>Update Pet Profile</SmallButton>
            <SmallButton onClick={()=> onClickingDelete(petProfile.id)}>Delete Pet Profile</SmallButton>
            </ButtonContainer>
        
        </>
    )
}   

PetProfileDetail.propTypes = {
    petProfile: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
};

export default PetProfileDetail;
