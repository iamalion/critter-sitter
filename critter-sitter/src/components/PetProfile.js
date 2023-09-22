import React, { useReducer } from 'react';
import { generateYears } from '../utils/utils';
import petInfoReducer from '../reducers/petInfoReducer';
import NameInput from './NameInput';
import avCat1Full from '../images/catImages/avCat1Full.svg';
import avCat2Full from '../images/catImages/avCat2Full.svg';
import avCat3Full from '../images/catImages/avCat3Full.svg';
import avCat4Full from '../images/catImages/avCat4Full.svg';
import avCat5Full from '../images/catImages/avCat5Full.svg';
import avCat6Full from '../images/catImages/avCat6Full.svg';
import avCat7Full from '../images/catImages/avCat7Full.svg';
import avCat8Full from '../images/catImages/avCat8Full.svg';
import avDog1Full from '../images/dogImages/avDog1Full.svg'; 
import avDog2Full from '../images/dogImages/avDog2Full.svg';
import avDog3Full from '../images/dogImages/avDog3Full.svg';
import avDog4Full from '../images/dogImages/avDog4Full.svg';
import avDog5Full from '../images/dogImages/avDog5Full.svg';
import avDog6Full from '../images/dogImages/avDog6Full.svg';
import avDog7Full from '../images/dogImages/avDog7Full.svg';
import avDog8Full from '../images/dogImages/avDog8Full.svg';

const initialPetInfo = {
    name: '',
    species: '',
    avatar: '',
    birthdayMonth: '',
    birthdayYear: '',
    microchip: '',
    insuranceSelect: '',
    insurance: '',
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
        <NameInput name={petInfo.name} setName={(value) => dispatch({type: 'UPDATE_FIELD', field: 'name', value })} />
        )
    },
    {label: 'Species',
    component: (
        <div>
            <label htmlFor="species">Love it. Is {petInfo.name} a cat or a dog?</label>
            <input
                type="radio"
                name="species"
                id="cat"
                value="cat"
                onChange={(e) => handleRadioChange(e, 'species')}
            />
            <label htmlFor="cat">Meow!</label>
            <input
                type="radio"
                name="species"
                id="dog"
                value="dog"
                onChange={(e) => handleRadioChange(e, 'species')}
            />
            <label htmlFor="dog">Woof!</label>
        </div>
        )
    },
    {label: 'Avatar',
    component: (
        <div>
            <label htmlFor="avatar">Let's pick an avatar for your {petInfo.species}, {petInfo.name}.</label>
            {petInfo.species === 'cat' ? (
                <>
                <input
                    type="radio"
                    name="avatar"
                    id="avatar1"
                    value={avCat1Full}
                    onClick={() => handleAvatarSelect(avCat1Full)}
                />
                    <img className="avatar" src={avCat1Full} alt="White Cat Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avCat2Full}
                    onClick={() => handleAvatarSelect(avCat2Full)}
                />
                    <img className="avatar" src={avCat2Full} alt="Black Cat Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avCat3Full}
                    onClick={() => handleAvatarSelect(avCat3Full)}
                />
                    <img className="avatar" src={avCat3Full} alt="Orange Cat Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avCat4Full}
                    onClick={() => handleAvatarSelect(avCat4Full)}
                />
                    <img className="avatar" src={avCat4Full} alt="Blue Cat Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avCat5Full}
                    onClick={() => handleAvatarSelect(avCat5Full)}
                />
                    <img className="avatar" src={avCat5Full} alt="Brown Cat Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avCat6Full}
                    onClick={() => handleAvatarSelect(avCat6Full)}
                />
                    <img className="avatar" src={avCat6Full} alt="Grey Cat Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avCat7Full}
                    onClick={() => handleAvatarSelect(avCat7Full)}
                />
                    <img className="avatar" src={avCat7Full} alt="Black and White Cat Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avCat8Full}
                    onClick={() => handleAvatarSelect(avCat8Full)}
                />
                    <img className="avatar" src={avCat8Full} alt="Brown and White Cat Avatar" />
                </>
              ) : (
                <>
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avDog1Full}
                    onClick={() => handleAvatarSelect(avDog1Full)}
                />
                    <img className="avatar" src={avDog1Full} alt="White Dog Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avDog2Full}
                    onClick={() => handleAvatarSelect(avDog2Full)}
                />
                    <img className="avatar" src={avDog2Full} alt="Black Dog Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avDog3Full}
                    onClick={() => handleAvatarSelect(avDog3Full)}
                />
                    <img className="avatar" src={avDog3Full} alt="Orange Dog Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avDog4Full}
                    onClick={() => handleAvatarSelect(avDog4Full)}
                />
                    <img className="avatar" src={avDog4Full} alt="Blue Dog Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avDog5Full}
                    onClick={() => handleAvatarSelect(avDog5Full)}
                />
                    <img className="avatar" src={avDog5Full} alt="Brown Dog Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avDog6Full}
                    onClick={() => handleAvatarSelect(avDog6Full)}
                />
                    <img className="avatar" src={avDog6Full} alt="Grey Dog Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avDog7Full}
                    onClick={() => handleAvatarSelect(avDog7Full)}
                />
                    <img className="avatar" src={avDog7Full} alt="Black and White Dog Avatar" />
                <input
                    type="radio"
                    name="avatar"
                    id="avatar"
                    value={avDog8Full}
                    onClick={() => handleAvatarSelect(avDog8Full)}
                />
                    <img className="avatar" src={avDog8Full} alt="Brown and White Dog Avatar" />

                </>
                )}
        </div>
        )
    },
    {label: 'Birthday',
    component: (
        <div>
            <label htmlFor="birthday">When is {petInfo.name}'s birthday? Your best guess is fine!</label>
            <select
                name="birthdayMonth"
                id="birthdayMonth"
                value={petInfo.birthdayMonth}
                onChange={handleInputChange}
            >
                <option value="">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>

            <select
                name="birthdayYear"
                id="birthdayYear"
                value={petInfo.birthdayYear}
                onChange={handleInputChange}
            >
            <option value="">Year</option>
            {generateYears()}
            </select>

        </div>
        )
    },
    {label: 'Microchip',
    component: (
        <div>
            <label htmlFor="microchip">What is {petInfo.name}'s microchip number? <p>If they don't have one, or if you don't know, you can skip this step.</p></label>
            <input
                type="text"
                name="microchip"
                id="microchip"
                value={petInfo.microchip}
                onChange={handleInputChange}
            />
        </div>
        )
    },
    {label: 'Insurance',
    component: (
        <div>
            <label htmlFor="insuranceSelect">Does {petInfo.name} have pet insurance? 
            </label>
            
            <input
                type="radio"
                name="insuranceSelect"
                id="insuranceSelectYes"
                value="yes"
                onChange={(e) => handleRadioChange(e, 'insuranceSelect')}
            />
            <label htmlFor="yes">Yes</label>
            <input
                type="radio"
                name="insuranceSelect"
                id="insuranceSelectNo"
                value="no"
                onChange={(e) => handleRadioChange(e, 'insuranceSelect')}
            />
            <label htmlFor="no">No</label>
            <br />
            {petInfo.insuranceSelect === 'yes' ? (
                <>
                <label htmlFor="insurance">What's the name of their insurance provider?</label>
                <input
                    type="text"
                    name="insurance"
                    id="insurance"
                    value={petInfo.insurance}
                    onChange={handleInputChange}
                />
                </>
            ) : (
                <></>
            )}

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