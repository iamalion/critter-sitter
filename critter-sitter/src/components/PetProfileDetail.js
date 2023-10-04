import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialPetInfo } from '../reducers/pet-info-reducer';
import { Card } from '../styles/Card.style.js';
import { ButtonContainer, SmallButton } from '../styles/Button.style.js';
import { Avatar, AvatarName, AvatarContainer } from '../styles/Avatar.style.js';
import { Paragraph } from '../styles/Paragraph.style.js';
import { Container } from '../styles/Container.style';

function PetProfileDetail(props){
    const { petProfile, onClickingDelete, onClickingEdit } = props;
    const [petInfo, dispatch] = useReducer(initialPetInfo, petProfile);

    return (
        <>
        <Container>
            <Card>
                <AvatarContainer>
                <Avatar className="avatar" src={petInfo.avatar} alt={petInfo.name + "'s Avatar"} />
                <AvatarName>{petInfo.name}</AvatarName>
        
                </AvatarContainer>
                <Paragraph><em>{petInfo.funFact ? petInfo.funFact : `${petInfo.name} has so many fun facts I can't pick one!`}</em></Paragraph>
                <Paragraph><strong>Birthday: </strong> {petInfo.birthdayMonth}/{petInfo.birthdayYear}</Paragraph>
                <Paragraph><strong>Microchip: </strong> {petInfo.microchip ? petInfo.microchip : `n/a`}</Paragraph>
                <Paragraph><strong>Insurance: </strong>{petInfo.insuranceProvider ? petInfo.insuranceProvider : `n/a`}</Paragraph>
            </Card>
        </Container>
            <ButtonContainer>           
                <SmallButton onClick={()=> onClickingEdit(petProfile.id)}>Update Pet Profile</SmallButton>
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
