import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AvatarInput from './steps/AvatarInput';
import BirthdayInput from './steps/BirthdayInput';
import { Container, Form, CommonInput } from '../styles/Container.style.js';
import { RadioButton, RadioLabel } from '../styles/Radio.style.js';
import { Button } from '../styles/Button.style.js';
import { updateDoc, doc } from "firebase/firestore";
import { db } from '../firebase';

function EditPetProfileForm(props) {
    const { petProfile } = props;

    // State to track form input values
    const [formData, setFormData] = useState({
        name: petProfile.name,
        species: petProfile.species,
        avatar: petProfile.avatar,
        birthdayMonth: petProfile.birthdayMonth,
        birthdayYear: petProfile.birthdayYear,
        microchip: petProfile.microchip || '', 
        insuranceSelect: petProfile.insuranceSelect || '',
        insuranceProvider: petProfile.insuranceProvider || '', 
        funFact: petProfile.funFact || ''
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEditPetProfileFormSubmission = async (e) => {
        e.preventDefault();
    
        // Create a reference to the specific pet profile document
        const petProfileDocRef = doc(db, "petProfiles", petProfile.uid);
    
        // Update the document with the new data
        try {
            await updateDoc(petProfileDocRef, {
                name: formData.name,
                species: formData.species,
                avatar: formData.avatar,
                birthdayMonth: formData.birthdayMonth,
                birthdayYear: formData.birthdayYear,
                microchip: formData.microchip,
                insuranceSelect: formData.insuranceSelect,
                insuranceProvider: formData.insuranceProvider,
                funFact: formData.funFact
            });
    
            console.log("Document successfully updated!");
            props.onEditPetProfile();
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };

    return (
        <Container>
        <Form onSubmit={handleEditPetProfileFormSubmission}>
            <label htmlFor="name">Name: </label>
            <CommonInput
                    type='text'
                    id="name"
                    name='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleInputChange}
                />
        <br />
            <label htmlFor="species">Species: </label>
            <div>
                <RadioLabel>
                    <RadioButton
                        type="radio"
                        name="species"
                        id="cat"
                        value="cat"
                        checked={formData.species === 'cat'}
                        onChange={handleInputChange}
                    />
                    Cat
                </RadioLabel>
                <RadioLabel>
                    <RadioButton
                        type="radio"
                        name="species"
                        id="dog"
                        value="dog"
                        checked={formData.species === 'dog'}
                        onChange={handleInputChange}
                    />
                    Dog
                </RadioLabel>
            </div>
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
            <CommonInput
                    type='text'
                    id="microchip"
                    name='microchip'
                    placeholder='Microchip'
                    value={formData.microchip}
                    onChange={handleInputChange}
                />
        <br />
            <label htmlFor="insuranceSelect">Insurance: </label>
            <div>
                <RadioLabel>
                    <RadioButton
                        type="radio"
                        name="insuranceSelect"
                        id="yes"
                        value="yes"
                        checked={formData.insuranceSelect === 'yes'}
                        onChange={handleInputChange}
                    />
                    Yes
                </RadioLabel>
                <RadioLabel>
                    <RadioButton

                        type="radio"
                        name="insuranceSelect"
                        id="no"
                        value="no"
                        checked={formData.insuranceSelect === 'no'}
                        onChange={handleInputChange}
                    />
                    No
                </RadioLabel>
            </div>
        <br />
            <label htmlFor="insuranceProvider">Insurance Provider: </label>
            <CommonInput
                    type='text'
                    id="insuranceProvider"
                    name='insuranceProvider'
                    placeholder='Insurance Provider'
                    value={formData.insuranceProvider}
                    onChange={handleInputChange}
                />

        
        <br />
            <label htmlFor="funFact">Fun Fact: </label>
            <CommonInput
                    type='text'
                    id="funFact"
                    name='funFact'
                    placeholder='Fun Fact'
                    value={formData.funFact}
                    onChange={handleInputChange}
                />
        <br />
            <Button type="submit">Save Pet Profile</Button>
        </Form>
        </Container>
    );
}

EditPetProfileForm.propTypes = {
    onEditPetProfile: PropTypes.func,
    petProfile: PropTypes.object, // Make sure to define the prop type
};

export default EditPetProfileForm;