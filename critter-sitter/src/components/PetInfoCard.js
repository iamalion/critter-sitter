import React from 'react';
import PetProfileControl from './PetProfileControl';
import { Avatar, AvatarContainer, AvatarName } from '../styles/Avatar.style';
import { Paragraph } from '../styles/Paragraph.style';

function PetInfoCard({ petInfo }) {
    return (
        <>
        <AvatarContainer> 
            <Avatar className="avatar" src={petInfo.avatar} alt={petInfo.name + "'s Avatar"} /> 
            <AvatarName>{petInfo.name}</AvatarName>
        </AvatarContainer>
        <Paragraph><em>{petInfo.funFact ? petInfo.funFact : `${petInfo.name} has so many fun facts I can't pick one!`}</em></Paragraph>
        <Paragraph><strong>Birthday: </strong> {petInfo.birthdayMonth}/{petInfo.birthdayYear}</Paragraph>
        <Paragraph><strong>Microchip: </strong> {petInfo.microchip ? petInfo.microchip : `n/a`}</Paragraph>
        <Paragraph><strong>Insurance: </strong>{petInfo.insuranceProvider ? petInfo.insuranceProvider : `n/a`}</Paragraph>
        </>
    )
}

export default PetInfoCard;