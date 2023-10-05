import React, { useReducer } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { initialPetInfo } from '../reducers/pet-info-reducer';
import PetInfoCard from './PetInfoCard';
import { Card } from '../styles/Card.style.js';
import { ButtonContainer, SmallButton, FaButton } from '../styles/Button.style.js';
import { Avatar, AvatarName, AvatarContainer } from '../styles/Avatar.style.js';
import { Paragraph } from '../styles/Paragraph.style.js';
import { Container, ContainerRow } from '../styles/Container.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faCalendarDay, faDog, faCat, faWandMagicSparkles, faCameraRetro } from '@fortawesome/free-solid-svg-icons';



function PetProfileDetail(props){
    const { petProfile, onClickingDelete, onClickingEdit } = props;
    console.log("Pet profile: " , petProfile);
    const [petInfo, dispatch] = useReducer(initialPetInfo, petProfile);
    console.log("Pet info: ", petInfo);
    // const { id } = useParams();


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
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <ContainerRow>
            <>
            <FaButton><FontAwesomeIcon icon={faHeartPulse}  /></FaButton>
            
            <FaButton><FontAwesomeIcon icon={faCalendarDay}  /></FaButton>
            {/* <div>
                {petInfo.species === 'dog' ? (
                    <FaButton><FontAwesomeIcon icon={faDog}  /></FaButton>
                ) : (
                    <FaButton><FontAwesomeIcon icon={faCat}  /></FaButton>
                )}
            </div> */}
            <FaButton><FontAwesomeIcon icon={faWandMagicSparkles}  /></FaButton>
            <FaButton><FontAwesomeIcon icon={faCameraRetro}  /></FaButton>
            
            </>
        </ContainerRow>
        </>
    )
}   

PetProfileDetail.propTypes = {
    petProfile: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
};

export default PetProfileDetail;
