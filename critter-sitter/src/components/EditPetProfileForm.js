import React from 'react'
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm'

function EditPetProfileForm(props) {
    const { petProfile } = props;

    function handleEditPetProfileFormSubmission(e) {
        e.preventDefault();
        props.onEditPetProfile ({
            name: e.target.name.value,
            species: e.target.species.value,
            avatar: e.target.avatar.value,
            birthdayMonth: e.target.birthdayMonth.value,
            birthdayYear: e.target.birthdayYear.value,
            microchip: e.target.microchip.value,
            insuranceSelect: e.target.insuranceSelect.value,
            insuranceProvider: e.target.insuranceProvider.value,
            funFact: e.target.funFact.value,
            id: petProfile.id
        });
    }

    return (
        <>
            <ReusableForm 
                formSubmissionHandler={handleEditPetProfileFormSubmission}
                buttonText="Update Pet Profile" />
        </>
    );
}

EditPetProfileForm.propTypes = {
    onEditPetProfile: PropTypes.func
};

export default EditPetProfileForm;
