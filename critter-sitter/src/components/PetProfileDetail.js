import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { initialPetInfo } from '../reducers/pet-info-reducer';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import db from '../firebase';
import NameInput from './NameInput';
import SpeciesInput from './SpeciesInput';
import AvatarInput from './AvatarInput';
import BirthdayInput from './BirthdayInput';
import MicrochipInput from './MicrochipInput';
import InsuranceInput from './InsuranceInput';
import FunFact from './FunFact';


function PetProfileDetail(props){
    const { id } = useParams();
    const [petInfo, setPetInfo] = useState(initialPetInfo, {});
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(initialFormData, {});
    const navigate = useNavigate();

    useEffect(() => {
        async function getPetProfile() {
            try {
                const docRef = doc(db, "petProfiles", id);
                const docSnapshot = await getDoc(docRef);

                if (docSnapshot.exists()) {
                    const petProfile = docSnapshot.data();
                    setPetInfo(petProfile);
                }
            } catch (error) {
                console.error("Error fetching pet profile: ", error);
            }
        }

        getPetProfile();
    }, [id]);

    const onClickingEdit = () => {
        setIsEditing(true);
    }

    const onClickingDelete = async () => {
        const docRef = doc(db, "petProfiles", id);
        try {
            await deleteDoc(docRef);
            navigate(`/view`);
        } catch (error) {
            console.error("Error removing document: ", error);
        }
    }
    
    const handleSaveClick = async () => {
        try {
            const docRef = doc(db, "petProfiles", id);
            await updateDoc(docRef, petInfo);
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData
        ({
            ...formData,
            [name]: value,
        });
    }


    if (!petInfo) {
        return (
            <div>
                <h1>No pet profile here!</h1>
            </div>
        );
    }

    return (
        <>
                {isEditing ? (
                    <div>
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
                <button onClick={handleSaveClick}>Save</button>
                </div>
                ) : (
                    <>
                        <img className="avatar" src={petInfo.avatar} alt="Selected Avatar"></img>
                        <h1>{petInfo.name} the {petInfo.species}</h1>
                        <p>Birthday: {petInfo.birthdayMonth}/{petInfo.birthdayYear}</p>
                        <p>Microchip: {petInfo.microchip ? petInfo.microchip : `n/a`}</p>
                        <p>Insurance: {petInfo.insuranceProvider ? petInfo.insuranceProvider : `n/a`}</p>
                        <p>Fun Fact: {petInfo.funFact ? petInfo.funFact : `${petInfo.name} has so many fun facts I can't pick one!`}</p>
                        <button onClick={onClickingEdit}>Edit Pet Profile</button>
                        <button onClick={()=> onClickingDelete(id)}>Delete Pet Profile</button>
                    </>
                )}
        </>
    );
}  

PetProfileDetail.propTypes = {
    petProfile: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
};

export default PetProfileDetail;