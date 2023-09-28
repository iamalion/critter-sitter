import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AvatarInput from './AvatarInput';
import NameInput from './NameInput';
import BirthdayInput from './BirthdayInput';
import InsuranceInput from './InsuranceInput';
import MicrochipInput from './MicrochipInput';
import SpeciesInput from './SpeciesInput';
import FunFact from './FunFact';
import { useParams } from 'react-router-dom';

function EditPetProfileForm(props) {
    const { id } = useParams();
    const { petProfile } = props;


    // State to track form input values
    const [formData, setFormData] = useState({
        name: '',
        species: '',
        avatar: '',
        birthdayMonth: '',
        birthdayYear: '',
        microchip: '',
        insuranceSelect: '',
        insuranceProvider: '',
        funFact: '',
    });

    useEffect(() => {
        
        if (petProfile) {
            setFormData({
                
                name: petProfile.name,
                species: petProfile.species,
                avatar: petProfile.avatar,
                birthdayMonth: petProfile.birthdayMonth,
                birthdayYear: petProfile.birthdayYear,
                microchip: petProfile.microchip,
                insuranceSelect: petProfile.insuranceSelect,
                insuranceProvider: petProfile.insuranceProvider,
                funFact: petProfile.funFact,
            });
        }
    }, [petProfile]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEditPetProfileFormSubmission = (e) => {
        e.preventDefault();
        props.onEditPetProfile({
            ...formData,
            id: petProfile?.id,
        });
    };

    console.log("Form data: ", formData)
    return (
        <form onSubmit={handleEditPetProfileFormSubmission}>
            <label htmlFor="name">Name: </label>
            <NameInput
                name={formData.name}
                setName={(value) => setFormData({ ...formData, name: value })}
                petInfo={formData}
            />
        <br />
            <label htmlFor="species">Species: </label>
            <SpeciesInput
                species={formData.species}
                setSpecies={(value) => setFormData({ ...formData, species: value })}
                petInfo={formData}
            />
        <br />
            <label htmlFor="avatar">Pick an Avatar: </label>
            <AvatarInput
                species={formData.species}
                avatar={formData.avatar}
                selectedAvatar={formData.avatar}
                handleAvatarSelect={(value) => setFormData({ ...formData, avatar: value })}
                petInfo={formData}
            />
        <br />
            <label htmlFor="birthdayMonth">Birthday: </label>
            <BirthdayInput
                birthdayMonth={formData.birthdayMonth}
                setBirthdayMonth={(value) => setFormData({ ...formData, birthdayMonth: value })}
                birthdayYear={formData.birthdayYear}
                setBirthdayYear={(value) => setFormData({ ...formData, birthdayYear: value })}
                handleInputChange={handleInputChange}
                petInfo={formData}
            />
        <br />    
            <label htmlFor="microchip">Microchip: </label>
            <MicrochipInput
                microchip={formData.microchip}
                setMicrochip={(value) => setFormData({ ...formData, microchip: value })}
                petInfo={formData}
            />
        <br />
            <label htmlFor="insuranceSelect">Insurance: </label>
            <InsuranceInput
                insuranceSelect={formData.insuranceSelect}
                setInsuranceSelect={(value) => setFormData({ ...formData, insuranceSelect: value })}
                insuranceProvider={formData.insuranceProvider}
                setInsuranceProvider={(value) => setFormData({ ...formData, insuranceProvider: value })}
                petInfo={formData}
            />
        <br />
            <label htmlFor="funFact">Fun Fact: </label>
            <FunFact
                funFact={formData.funFact}
                setFunFact={(value) => setFormData({ ...formData, funFact: value })}
                petInfo={formData}
            />
        <br />
            <button type="submit">Update Pet Profile</button>
        </form>
    );
}

EditPetProfileForm.propTypes = {
    onEditPetProfile: PropTypes.func,
    petProfile: PropTypes.object, 
};

export default EditPetProfileForm;

