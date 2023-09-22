import React, { useReducer } from 'react';
import petInfoReducer from '../reducers/petInfoReducer';
import NameInput from './NameInput';
import SpeciesInput from './SpeciesInput';
import AvatarInput from './AvatarInput';
import BirthdayInput from './BirthdayInput';
import MicrochipInput from './MicrochipInput';
import InsuranceInput from './InsuranceInput';
import FunFact from './FunFact';
import Confirmation from './Confirmation';

const initialPetInfo = {
    name: '',
    species: '',
    avatar: '',
    birthdayMonth: '',
    birthdayYear: '',
    microchip: '',
    insuranceSelect: '',
    insuranceProvider: '',
    funFact: '',
    };

function PetProfile() {
  const [petInfo, dispatch] = useReducer(petInfoReducer, initialPetInfo);
  
  // deconstructed petInfo object to clean up code below
  const { name, species, avatar, birthdayMonth, birthdayYear, microchip, insuranceSelect, insuranceProvider, funFact } = petInfo;
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  const handleRadioChange = (e, field) => {
    const value = e.target.value;
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleAvatarSelect = (selectedAvatar: string) => {
    dispatch({ type: 'UPDATE_FIELD', field: 'avatar', value: selectedAvatar });
  };
  
  const [step, setStep] = React.useState(1);

  const maxStep = Object.keys(petInfo).length + 1;
  
  const nextStep = () => {
    setStep(step === maxStep ? maxStep : step + 1);
  };

  const prevStep = () => {
    setStep(step === 1 ? 1 : step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <form onSubmit={handleSubmit}>
          {steps[step - 1] && (
            <>
              <h3>Step {step} of {steps.length}</h3>
              {steps[step - 1].component}
              {step !== 1 && <button onClick={prevStep}>Back</button>}
              {step !== steps.length && <button onClick={nextStep}>Next</button>}
            </>
          )}
        </form>
      </div>
    </>
  );
}
  export default PetProfile;