import React from "react"; 
import { Container } from "../../styles/Container.style.js"
import { Card } from "../../styles/Card.style.js"
import { Avatar, AvatarName, AvatarContainer } from "../../styles/Avatar.style.js"
import { Paragraph } from "../../styles/Paragraph.style.js";

function Confirmation({ petInfo }) {
    return (
        <>
            <Container>
                
                <h2>Here's what we have so far:</h2>
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
        </>
    )
}

export default Confirmation;
