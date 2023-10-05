import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialPetInfo } from '../reducers/pet-info-reducer';
import { Card, SmallCard } from '../styles/Card.style.js';
import { ButtonContainer, SmallButton, FaButton } from '../styles/Button.style.js';
import { Avatar, AvatarName, AvatarContainer } from '../styles/Avatar.style.js';
import { Paragraph } from '../styles/Paragraph.style.js';
import { Container, ContainerRow } from '../styles/Container.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faCalendarDay, faDog, faCat, faWandMagicSparkles, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



function PetProfileDetail(props){
    const navigate = useNavigate();
    const { petProfile, onClickingDelete, onClickingEdit } = props;
    const [petInfo, 
        // cleaning up unused code
        // dispatch
    ] = useReducer(initialPetInfo, petProfile);


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
            <><SmallCard><FaButton><FontAwesomeIcon icon={faHeartPulse} className="fa-icon"  
            onClick={() => navigate('/health')}
            /></FaButton>
            <Paragraph>
            </Paragraph></SmallCard>
            
            
            <SmallCard><FaButton><FontAwesomeIcon icon={faCalendarDay} className="fa-icon" /></FaButton></SmallCard>
            <div>
                {petInfo.species === 'dog' ? (
                    <SmallCard><FaButton><FontAwesomeIcon icon={faDog} className="fa-icon" /></FaButton></SmallCard>
                ) : (
                    <SmallCard><FaButton><FontAwesomeIcon icon={faCat} className="fa-icon" /></FaButton></SmallCard>
                )}
            </div>
            <SmallCard><FaButton><FontAwesomeIcon icon={faWandMagicSparkles} className="fa-icon" /></FaButton></SmallCard>
            <SmallCard><FaButton><FontAwesomeIcon icon={faCameraRetro} className="fa-icon" /></FaButton></SmallCard>
            
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