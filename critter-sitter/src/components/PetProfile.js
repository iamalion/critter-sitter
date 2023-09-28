import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PetProfile(props){
    return (
        <>
                <Link to={`/pet-profile/${props.id}`}>
                <div onClick = {() => props.whenPetProfileClicked(props.id)}>
                    <img className="avatar" src={props.avatar} alt={props.name + "'s Avatar"} />
                    <h3>{props.name}</h3>
                </div>
                </Link>
        </> 
    )
}

PetProfile.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    id: PropTypes.string,
    whenPetProfileClicked: PropTypes.func
}

export default PetProfile