import React, { useEffect, useState } from 'react'
import PetProfileList from './PetProfileList'
import PetProfileDetail from './PetProfileDetail'
import EditPetProfileForm from './EditPetProfileForm'
import { collection, onSnapshot, doc, addDoc, setDoc } from "firebase/firestore";
import { db, auth } from './../firebase';
import NewPetProfileForm from './NewPetProfileForm';

function PetProfileControl() {
    const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
    const [petProfileList, setPetProfileList] = useState([]);
    const [selectedPetProfile, setSelectedPetProfile] = useState(null);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const unSubscribe = onSnapshot(collection(db, "petProfiles"), (collectionSnapshot) => {
            const petProfiles = [];
            collectionSnapshot.forEach((doc) => {
                if (!doc.data().deleted){
                petProfiles.push({
                    ...doc.data(),
                    id: doc.id,
                });
            }
            });
            console.log("Fetched from Firestore: ", petProfiles)
            setPetProfileList(petProfiles);
        }
    );
    return () => unSubscribe();
    }, []);

    const handleClick = () => {
        if (selectedPetProfile != null) {
            setSelectedPetProfile(null);
            setFormVisibleOnPage(false);
            setEditing(false);
        } else {
            setFormVisibleOnPage(!formVisibleOnPage);
        }
    }

    const handleAddingNewPetProfileToList = async (newPetProfile) => {
        const collectionRef = collection(db, "petProfiles");
        await addDoc(collectionRef, newPetProfile);
        setFormVisibleOnPage(false);
    }

    const handleEditClick = () => {
        setEditing(true);
    }

    const handleEditingPetProfileInList = async (petProfileToEdit) => {
        const docRef = doc(db, "petProfiles", petProfileToEdit.id);
        await setDoc(docRef, petProfileToEdit);
        setSelectedPetProfile(null);
        setEditing(false);
    }

    const handleDeletingPetProfile = async (id) => {
        const docRef = doc(db, "petProfiles", id);
        await setDoc(docRef, {deleted: true});
        setSelectedPetProfile(null);
    }

    const handleChangingSelectedPetProfile = (id) => {
        const selectedPetProfile = petProfileList.filter(petProfile => petProfile.id === id)[0];
        setSelectedPetProfile(selectedPetProfile);
    }
    let currentlyVisibleState = null;

    if (auth.currentUser == null){
        console.log("The user is: " + auth.currentUser)
        currentlyVisibleState =
        <h2>You must be signed in to view this page.</h2>
        
    } else if (auth.currentUser != null) {
        if (editing) {
            currentlyVisibleState = 
                <EditPetProfileForm 
                    petProfile={selectedPetProfile} 
                    onEditPetProfile={handleEditingPetProfileInList}
                />
        } else if (selectedPetProfile != null) {
            currentlyVisibleState = 
                <PetProfileDetail 
                    petProfile={selectedPetProfile} 
                    onClickingDelete={handleDeletingPetProfile}
                    onClickingEdit={handleEditClick} 
                />
        } else if (formVisibleOnPage) {
            currentlyVisibleState = 
                <NewPetProfileForm 
                    onNewPetProfileCreation={handleAddingNewPetProfileToList} 
                />
        } else {
            currentlyVisibleState = 
                <PetProfileList 
                    petProfiles={petProfileList} 
                    onProfileSelection={handleChangingSelectedPetProfile} 
                />
        }
    }

    return (
        <>
            {currentlyVisibleState}
            <button onClick={handleClick}>{formVisibleOnPage ? "Return to Pet Profiles" : "Add Pet Profile"}</button>
        </>
    );
}

    
export default PetProfileControl