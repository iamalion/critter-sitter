import React, { useState } from 'react'
import PetProfileForm from './PetProfileForm'
import PetProfileList from './PetProfileList'
import EditPetProfileForm from './EditPetProfileForm'
import PetProfileDetail from './PetProfileDetail'


function PetProfileControl() {
    const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
    const [petProfileList, setPetProfileList] = useState([]);
    const [selectedPetProfile, setSelectedPetProfile] = useState(null);
    const [editing, setEditing] = useState(false);

    const handleClick = () => {
        if (selectedPetProfile != null) {
            setFormVisibleOnPage(false);
            setSelectedPetProfile(null);
            setEditing(false);
        } else {
            setFormVisibleOnPage(!formVisibleOnPage );
        }
    }

    const handleDeletingPetProfile = (id) => {
        const newPetProfileList = petProfileList.filter(petProfile => petProfile.id !== id);
        setPetProfileList(newPetProfileList);
        setSelectedPetProfile(null);
    }

    const handleEditClick = () => { 
        setEditing(true);
    }

    const handleEditingPetProfileInList = (petProfileToEdit) => {
        const editedPetProfileList = petProfileList.filter(petProfile => petProfile.id !== this.state.selectedPetProfile.id).concat(petProfileToEdit);
        setPetProfileList(editedPetProfileList);
        setEditing(false);
        setSelectedPetProfile(null);
    }

    const handleAddingNewPetProfileToList = (newPetProfile) => {
        const newPetProfileList = petProfileList.concat(newPetProfile);
        setPetProfileList(newPetProfileList);
        setFormVisibleOnPage(false);
    }

    const handleChangingSelectedPetProfile = (id) => {
        const selection = petProfileList.filter(petProfile => petProfile.id === id)[0];
        setSelectedPetProfile(selection);
    }

    let currentlyVisibleState = null;
    let buttonText = null;
    if (editing) {
        currentlyVisibleState = 
            <EditPetProfileForm 
                petProfile={selectedPetProfile} 
                onEditPetProfile={handleEditingPetProfileInList} 
            />
        buttonText = "Return to Pet Profile List";
    } else if (selectedPetProfile != null) {
        currentlyVisibleState = 
            <PetProfileDetail 
                petProfile={selectedPetProfile} 
                onClickingDelete={handleDeletingPetProfile} 
                onClickingEdit={handleEditClick} 
            />
        buttonText = "Return to Pet Profile List";
    } else if (formVisibleOnPage) {
        currentlyVisibleState = 
            <PetProfileForm 
                onNewPetProfileCreation={handleAddingNewPetProfileToList} 
            />
        buttonText = "Return to Pet Profile List";
    } else {
        currentlyVisibleState =
            <PetProfileList 
                petProfileList={petProfileList} 
                onPetProfileSelection={handleChangingSelectedPetProfile} 
            />
    
        buttonText = "Add Pet Profile";
    }

    return (
        <div>
            {currentlyVisibleState
                
            }
        </div>
    );
}
    

export default PetProfileControl
