import React, { useState } from 'react'
import PetProfile from './PetProfileForm'
import PetProfileList from './PetProfileList'
import { db, auth } from '../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { render } from '@testing-library/react';

export async function handleAddingPetProfileToList(newPetProfile, setFormVisibleOnPage) {
    const collectionRef = collection(db, "petProfiles");
    await addDoc(collectionRef, newPetProfile);
    setFormVisibleOnPage(false);
}

function PetProfileControl() {
    const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
    const [selectedPetProfile, setSelectedPetProfile] = useState(null);
    const [editing, setEditing] = useState(false);
    const [petProfiles, setPetProfiles] = useState([])

    const handleClick = () => {
        if (selectedPetProfile != null) {
            setSelectedPetProfile(null);
            setEditing(false);
        } else {
            setFormVisibleOnPage(true);
        }
    }

    const handleDeletingPetProfile = async (id) => {
        await deleteDoc(doc(db, "petProfiles", id));
        setSelectedPetProfile(null);
    }

    const handleEditClick = () => {
        setEditing(true);
    }

    const handleEditingPetProfileInList = async (petProfileToEdit) => {
        const docRef = doc(db, "petProfiles", petProfileToEdit.id);
        await updateDoc(docRef, petProfileToEdit);
        setEditing(false);
        setSelectedPetProfile(null);
    }
    
    const handleAddingPetProfileToList = async(newPetProfile) => {
        const collectionRef = collection(db, "petProfiles");
        await addDoc(collectionRef, newPetProfile,;
        setFormVisibleOnPage(false));
    }


    return (
        <div>
            <PetProfileList petProfiles={petProfiles} setPetProfiles={setPetProfiles} />
            <PetProfile petProfiles={petProfiles} setPetProfiles={setPetProfiles} />
        </div>
    );
}

export default PetProfileControl