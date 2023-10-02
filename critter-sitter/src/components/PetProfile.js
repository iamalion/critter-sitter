import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../styles/Card.style.js'
import { AvatarContainer, Avatar, AvatarName } from '../styles/Avatar.style.js'

function PetProfile(props){
    return (
        <>
        <Card>
            <div onClick = {() => props.whenPetProfileClicked(props.id)}>
                <AvatarContainer>
                <Avatar className="avatar" src={props.avatar} alt={props.name + "'s Avatar"} />
                <AvatarName>{props.name}</AvatarName>
                </AvatarContainer>
            </div>
        </Card>
        </>
    )
}

PetProfile.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    id: PropTypes.string,
    whenPetProfileClicked: PropTypes.func
}

export default PetProfile;