import React from "react";
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
    const [submitted, setSubmitted] = React.useState(false);
  
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
                console.log("Document written with ID: ", docRef.id);
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
                    <p>First up, what's their name?</p>
                    <NameInput name={name} setName={(value) => dispatch({type: 'UPDATE_FIELD', field: 'name', value })} />
                </div>
                )
            },
            {label: 'Species',
            component: (
                <div>
                    <p>Love it. And is {petInfo.name} a cat or a dog?</p>
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
                    <p>Pick an avatar for your {petInfo.species}, {petInfo.name}.</p>
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
                    <p>When is {petInfo.name}'s birthday?</p>
                    <p>(Don't worry, we won't tell them you forgot.)</p>
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
                    <p>Does {petInfo.name} have a microchip?</p>
                    <p>If not, or if you don't know, you can skip this step.</p>
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
                    <p>Does {petInfo.name} have pet insurance?</p>
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
                    <p>Finally, tell us a fun fact about {petInfo.name}!</p>
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