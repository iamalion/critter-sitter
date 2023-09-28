import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

function PetProfile(props){
    return (
        <>
            {/* replacement code below this line */}
            <div onClick = {() => props.whenPetProfileClicked(props.id)}>
                <img className="avatar" src={props.avatar} alt={props.name + "'s Avatar"} />
                <h3>{props.name}</h3>
            </div>
            </>
    )
}
            /* replacement code above this line 
        
        
     The code below is being commented out in favor of going back to older code that I know worked. 

                {/* <Link to={`/pet-profile/${props.id}`}>
                <div onClick = {() => props.whenPetProfileClicked(props.id)}>
                    <img className="avatar" src={props.avatar} alt={props.name + "'s Avatar"} />
                    <h3>{props.name}</h3>
                </div>
                </Link> */


PetProfile.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    id: PropTypes.string,
    whenPetProfileClicked: PropTypes.func
}

export default PetProfile