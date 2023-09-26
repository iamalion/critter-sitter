import React, { useEffect, useState } from 'react'
import PetProfileList from './PetProfileList'
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import db from './../firebase'

function PetProfileControl() {
    const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
    const [petProfileList, setPetProfileList] = useState([]);

    useEffect(() => {
        const unSubscribe = onSnapshot(collection(db, "petProfiles"), (collectionSnapshot) => {
            const petProfiles = [];
            collectionSnapshot.forEach((doc) => {
                petProfiles.push({
                    ...doc.data(),
                    id: doc.id,
                });
            });
            console.log("Fetched: ", petProfiles)
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

    let currentlyVisibleState = null;
    
    if (petProfileList.length === 0) {
        return (
            <div>
                <h1>No pets here!</h1>
            </div>
        )
    } else {
        currentlyVisibleState =
        <PetProfileList petProfiles={petProfileList} />
    }

    return (
        <div>
            {currentlyVisibleState}
        </div>
    )
}
    
export default PetProfileControl
