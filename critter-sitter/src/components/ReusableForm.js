import React, { useState } from "react";
import PropTypes from "prop-types";
import NameInput from './NameInput';
import SpeciesInput from './SpeciesInput';
import AvatarInput from './AvatarInput';
import BirthdayInput from './BirthdayInput';
import MicrochipInput from './MicrochipInput';
import InsuranceInput from './InsuranceInput';
import FunFact from './FunFact';
import Confirmation from './Confirmation';
import { useReducer } from 'react';
import petInfoReducer from '../reducers/pet-info-reducer';
import { initialPetInfo } from '../reducers/pet-info-reducer';
import db from '../firebase';
import { collection, addDoc } from "firebase/firestore";

function ReusableForm() {
    // using useReducer to manage state of form
    const [petInfo, dispatch] = useReducer(petInfoReducer, initialPetInfo);

    // adding state to track if form has been submitted; only want to add to firebase if form has been submitted
    const [submitted, setSubmitted] = useState(false);
  
    //  deconstructed petInfo object to clean up code below
    const { name, species, avatar, birthdayMonth, birthdayYear, microchip, insuranceSelect, insuranceProvider, funFact } = petInfo;
   
    //  function to handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE_FIELD', field: name, value });
    };

    // function to handle avatar selection
    const handleAvatarSelect = (selectedAvatar: string) => {
        dispatch({ type: 'UPDATE_FIELD', field: 'avatar', value: selectedAvatar });
    };
    
    //  function to handle next step
    const [step, setStep] = React.useState(1);
    
    const maxStep = Object.keys(petInfo).length + 1;
    
    const nextStep = (e) => {
            setStep(step === maxStep ? maxStep : step + 1);
        };
    
    // function to handle previous step
    const prevStep = () => {
        setStep(step === 1 ? 1 : step - 1);
    };

    // function to handle adding pet profile to firebase
    const handleAddingPetProfile = async (e) => {
        e.preventDefault();
        if (submitted) {
            const newPetProfile = {
                name: name,
                species: species,
                avatar: avatar,
                birthdayMonth: birthdayMonth,
                birthdayYear: birthdayYear,
                microchip: microchip,
                insuranceSelect: insuranceSelect,
                insuranceProvider: insuranceProvider,
                funFact: funFact,
            };
            // Add a new document with a generated id.
            try {
                const docRef = await addDoc(collection(db, "petProfiles"), newPetProfile);
                setSubmitted(true);
            } catch (error) {
                alert("Error adding document: ", error);
            }
        }
    };
        //  array of objects to hold steps and their corresponding components   
        const steps = [
            {label: 'Name',
            component: (
                <div>
                    <label htmlFor="name">First up, what is your pet's name?</label>
                    <NameInput name={name} setName={(value) => dispatch({type: 'UPDATE_FIELD', field: 'name', value })} />
                </div>
                )
            },
            {label: 'Species',
            component: (
                <div>
                    <p>Love it. Is {petInfo.name} a cat or a dog?</p>
                    <SpeciesInput 
                        species={species} 
                        setSpecies={(value) => dispatch({type: 'UPDATE_FIELD', field: 'species', value })} 
                        petInfo={petInfo}
                        />
                </div>
            )
            },
            {label: 'Avatar',
            component: (
                <div>
                     <label htmlFor="avatar">Let's pick an avatar for your {petInfo.species}, {petInfo.name}.</label>
                    <AvatarInput 
                        species={species} 
                        avatar={avatar} 
                        selectedAvatar={avatar} handleAvatarSelect={handleAvatarSelect} 
                        petInfo={petInfo}
                    />
                </div>
                )
            },
            {label: 'Birthday',
            component: (
                <div>
                    <label htmlFor="birthday">When is {petInfo.name}'s birthday? Your best guess is fine!</label>
                    <BirthdayInput 
                        birthdayMonth={birthdayMonth}
                        setBirthdayMonth={(value) => dispatch({type: 'UPDATE_FIELD', field: 'birthdayMonth', value })}
                        birthdayYear={birthdayYear}
                        setBirthdayYear={(value) => dispatch({type: 'UPDATE_FIELD', field: 'birthdayYear', value })}
                        handleInputChange={handleInputChange}
                        petInfo={petInfo}
                    />
                </div>
                )
            },
            {label: 'Microchip',
            component: (
                <div>
                    <label htmlFor="microchip">What is {petInfo.name}'s microchip number? <p>If they don't have one, or if you don't know, you can skip this step.</p></label>
                    <MicrochipInput 
                        microchip={microchip}
                        setMicrochip={(value) => dispatch({type: 'UPDATE_FIELD', field: 'microchip', value })}
                        petInfo={petInfo}
                    />
                </div>
                )
            },
            {label: 'Insurance',
            component: (
                <div>
                    <label htmlFor="insuranceSelect">Does {petInfo.name} have pet insurance? </label>
                    <InsuranceInput
                        insuranceSelect={insuranceSelect}
                        setInsuranceSelect={(value) => dispatch({type: 'UPDATE_FIELD', field: 'insuranceSelect', value })}
                        insuranceProvider={insuranceProvider}
                        setInsuranceProvider={(value) => dispatch({type: 'UPDATE_FIELD', field: 'insuranceProvider', value })}
                        petInfo={petInfo}
                    />
                    </div>
                )
            },
            {label: 'Fun Fact',
            component: (
                <div>
                    <label htmlFor="funFact">Tell us a fun fact about {petInfo.name}!</label>
                    <FunFact
                        funFact={funFact}
                        setFunFact={(value) => dispatch({type: 'UPDATE_FIELD', field: 'funFact', value })}
                        petInfo={petInfo}
                    />
                </div>
                )
            },
            {label: 'Confirm and Submit',
            component: (
                <div>
                    <Confirmation petInfo={petInfo} />
                </div>
                )

            },
        ];

    return (
        <>
            <div>
                <h2>Let's talk about your critter!</h2>
                <form onSubmit={handleAddingPetProfile}>
                {steps[step - 1] && (
                    <>
                        <h3>Step {step} of {steps.length}</h3>
                        {steps[step - 1].component}
                        {step !== 1 && 
                        <button onClick={prevStep}>
                            Back
                        </button>}
                        {step !== steps.length && 
                        <button onClick={nextStep}>
                            Next
                        </button>}
                        {step === steps.length &&
                        <button type="submit" onClick={() => setSubmitted(true)}>
                            Submit
                        </button>}
                    </>
                )}
                </form>
            </div>
        </>
    );
}

export default ReusableForm;