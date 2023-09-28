import React, { useEffect, useState } from 'react'
import PetProfileList from './PetProfileList'
import PetProfileForm from './PetProfileForm'
import PetProfileDetail from './PetProfileDetail'
import EditPetProfileForm from './EditPetProfileForm'
import { collection, onSnapshot, doc, addDoc, setDoc } from "firebase/firestore";
import db from './../firebase'

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
            setPetProfileList(petProfiles);
        }
    );
    return () => unSubscribe();
    }, []);


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
        const selectedPetProfile = petProfileList.find(petProfile => petProfile.id === id)[0];
        console.log(selectedPetProfile);
        setSelectedPetProfile(selectedPetProfile);
    }

    return (
        <div>
          {editing ? (
            <EditPetProfileForm
              petProfile={selectedPetProfile}
              onEditPetProfile={handleEditingPetProfileInList}
            />
          ) : selectedPetProfile != null ? (
            <PetProfileDetail
              petInfo={selectedPetProfile}
              editing={editing}
              onEditPetProfile={handleEditingPetProfileInList}
              onClickingDelete={handleDeletingPetProfile}
            />
          ) : formVisibleOnPage ? (
            <PetProfileForm onNewPetProfileCreation={handleAddingNewPetProfileToList} />
          ) : (
            <PetProfileList
              petProfiles={petProfileList}
              onProfileSelection={handleChangingSelectedPetProfile}
            />
          )}
        </div>
      );

    // let currentlyVisibleState = null;

    // if (editing) {
    //     currentlyVisibleState = <EditPetProfileForm petProfile={selectedPetProfile} onEditPetProfile={handleEditingPetProfileInList} />
        
    // } else if (selectedPetProfile != null) {
    //     currentlyVisibleState = <PetProfileDetail petProfile={selectedPetProfile} onClickingDelete={handleDeletingPetProfile} onClickingEdit={handleEditClick} />
        
    // } else if (formVisibleOnPage) {
    //     currentlyVisibleState = <PetProfileForm onNewPetProfileCreation={handleAddingNewPetProfileToList} />
        
    // } else {
    //     currentlyVisibleState = <PetProfileList petProfiles={petProfileList} onProfileSelection={handleChangingSelectedPetProfile} />
    
    // }

    // return (
    //     <div>
    //         {currentlyVisibleState}
    //     </div>
    // )
}
    
export default PetProfileControl
