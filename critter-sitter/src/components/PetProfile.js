import React, { useReducer } from 'react';
import petInfoReducer from '../reducers/petInfoReducer';
import NameInput from './NameInput';
import SpeciesInput from './SpeciesInput';
import AvatarInput from './AvatarInput';
import BirthdayInput from './BirthdayInput';
import MicrochipInput from './MicrochipInput';
import InsuranceInput from './InsuranceInput';

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
    console.log(petInfo);
  };

  const steps = [
    {label: 'Name',
    component: (
        <div>
            <NameInput name={petInfo.name} setName={(value) => dispatch({type: 'UPDATE_FIELD', field: 'name', value })} />
        </div>
        )
    },
    {label: 'Species',
    component: (
        <div>
            <SpeciesInput 
                species={petInfo.species} 
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
                species={petInfo.species} 
                avatar={petInfo.avatar} 
                selectedAvatar={petInfo.avatar} handleAvatarSelect={handleAvatarSelect} 
                petInfo={petInfo}
            />
        </div>
        )
    },
    {label: 'Birthday',
    component: (
        <div>
            <BirthdayInput 
                birthdayMonth={petInfo.birthdayMonth}
                setBirthdayMonth={(value) => dispatch({type: 'UPDATE_FIELD', field: 'birthdayMonth', value })}
                birthdayYear={petInfo.birthdayYear}
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
                microchip={petInfo.microchip}
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
                insuranceSelect={petInfo.insuranceSelect}
                setInsuranceSelect={(value) => dispatch({type: 'UPDATE_FIELD', field: 'insuranceSelect', value })}
                insuranceProvider={petInfo.insuranceProvider}
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
            <input
                type="text"
                name="funFact"
                id="funFact"
                value={petInfo.funFact}
                onChange={handleInputChange}
            />
        </div>
        )
    },
    {label: 'Confirm and Submit',
    component: (
        <div>
            <h2>Here's what we have so far:</h2>
            <img className="avatar" src={petInfo.avatar} alt="Selected Avatar"></img>
            <p>{petInfo.name} the {petInfo.species}</p>
            <p>Birthday: {petInfo.birthdayMonth}/{petInfo.birthdayYear}</p>
            <p>Microchip: {petInfo.microchip ? petInfo.microchip : `n/a`}</p>
            <p>Insurance: {petInfo.insurance ? petInfo.insurance : `n/a`}</p>
            <p>Fun Fact: {petInfo.funFact ? petInfo.funFact : `${petInfo.name} has so many fun facts I can't pick one!`}</p>
            <p>If this is correct, go ahead and click submit! (Don't worry, you can alway update things later!)</p>
            <button type="submit">Submit</button>
        </div>
        )
    },
    ];

  return (
    <>
      <div>
        <h2>Let's talk about your buddy!</h2>
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