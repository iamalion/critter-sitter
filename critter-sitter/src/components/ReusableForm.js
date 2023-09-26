import React from "react";
// import PropTypes from "prop-types";
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
    // const { formSubmissionHandler } = props;
    
    const [petInfo, dispatch] = useReducer(petInfoReducer, initialPetInfo);
  
    //  deconstructed petInfo object to clean up code below
    const { name, species, avatar, birthdayMonth, birthdayYear, microchip, insuranceSelect, insuranceProvider, funFact } = petInfo;
  
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE_FIELD', field: name, value });
    };

    const handleAvatarSelect = (selectedAvatar: string) => {
        dispatch({ type: 'UPDATE_FIELD', field: 'avatar', value: selectedAvatar });
    };
    
    const [step, setStep] = React.useState(1);

    const maxStep = Object.keys(petInfo).length + 1;
    
    const nextStep = (e) => {
            // e.preventDefault();
            console.log("Next step")
            setStep(step === maxStep ? maxStep : step + 1);
        };

    const prevStep = () => {
        console.log("Previous step")
        setStep(step === 1 ? 1 : step - 1);
    };

    const handleAddingPetProfile = async (e) => {
        e.preventDefault();
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
            // id: petInfo.id,
            };
            console.log(newPetProfile);
            try {
                const docRef = await addDoc(collection(db, "petProfiles"), newPetProfile);
                console.log("Profile added with ID: ", docRef.id);
            } catch (error) {
                console.error("Error adding profile: ", error);
            }
        };
            
        const steps = [
            {label: 'Name',
            component: (
                <div>
                    <NameInput name={name} setName={(value) => dispatch({type: 'UPDATE_FIELD', field: 'name', value })} />
                </div>
                )
            },
            {label: 'Species',
            component: (
                <div>
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
              <button type="submit">
                Submit
              </button>}
            </>
          )}
        </form>
      </div>
    </>
  );
}

// ReusableForm.propTypes = {
//   formSubmissionHandler: PropTypes.func,
// };

export default ReusableForm;