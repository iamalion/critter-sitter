import React, { useReducer } from 'react';
import petInfoReducer from '../reducers/pet-info-reducer';
import { initialPetInfo } from '../reducers/pet-info-reducer';
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function PetProfileForm(props) {

  function handleNewPetProfileFormSubmission(e) {
    e.preventDefault();
    props.onNewPetProfileCreation({
      name: e.target.name.value,
      species: e.target.species.value,
      avatar: e.target.avatar.value,
      birthdayMonth: e.target.birthdayMonth.value,
      birthdayYear: e.target.birthdayYear.value,
      microchip: e.target.microchip.value,
      insuranceSelect: e.target.insuranceSelect.value,
      insuranceProvider: e.target.insuranceProvider.value,
      funFact: e.target.funFact.value,
      id: v4(),
    })
  }

  return (
    <>
      <ReusableForm 
        formSubmissionHandler={handleNewPetProfileFormSubmission}
        buttonText="Add Pet Profile" />
    </>
  );
}

PetProfileForm.propTypes = {
  onNewPetProfileCreation: PropTypes.func
};

  
export default PetProfileForm;