import React from 'react'
import PropTypes from 'prop-types'

function PetProfile(props){
    return (
        <>
            <div onClick = {() => props.whenProfileClicked(props.id)}>
                <h3>{props.name} the {props.species}</h3>
            </div>
        </>
    )
}

PetProfile.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    id: PropTypes.string,
    whenProfileClicked: PropTypes.func
}

export default PetProfile