import React, { useEffect, useState } from 'react'
import PetProfileList from './PetProfileList'
import PetProfileDetail from './PetProfileDetail'
import EditPetProfileForm from './EditPetProfileForm'
import { collection, onSnapshot, doc, addDoc, setDoc } from "firebase/firestore";
import { db, auth } from './../firebase';
import NewPetProfileForm from './NewPetProfileForm';
import { updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function PetProfileControl() {
    const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
    const [petProfileList, setPetProfileList] = useState([]);
    const [selectedPetProfile, setSelectedPetProfile] = useState(null);
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unSubscribe = onSnapshot(collection(db, "petProfiles"), (collectionSnapshot) => {
            const petProfiles = [];
            const currentUser = auth.currentUser;
            collectionSnapshot.forEach((doc) => {
                if (!doc.data().deleted && currentUser && doc.data().uid === currentUser.uid){
                petProfiles.push({
                    ...doc.data(),
                    id: doc.id,
                });
            }
            });
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
        if (selectedPetProfile != null){
            setEditing(true);
        } else {
           
        }
    }

    const handleEditingPetProfileInList = async (petProfileToEdit) => {
        console.log("petProfileToEdit: " + petProfileToEdit);
        try {
            const docRef = doc(db, "petProfiles", petProfileToEdit.id);
            await updateDoc(docRef, petProfileToEdit);
            setSelectedPetProfile(null);
            setEditing(false);
        } catch (error) {
            console.error("Error updating document: ", error);
        }
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
        </>
    );
}

    
export default PetProfileControl