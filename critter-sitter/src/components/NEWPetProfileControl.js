// This code is from the original PetProfileControl.js file. I am going to use PetProfileControl.js still, and hold code here that I don't want to get rid of

// import React, { useEffect, useState } from 'react'
// import PetProfileList from './PetProfileList'
// import { collection, onSnapshot, addDoc } from "firebase/firestore";
// import db from './../firebase'

// function PetProfileControl() {
//     const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
//     const [petProfileList, setPetProfileList] = useState([]);

//     useEffect(() => {
//         const unSubscribe = onSnapshot(collection(db, "petProfiles"), (collectionSnapshot) => {
//             const petProfiles = [];
//             collectionSnapshot.forEach((doc) => {
//                 petProfiles.push({
//                     ...doc.data(),
//                     id: doc.id,
//                 });
//             });
//             console.log("Fetched: ", petProfiles)
//             setPetProfileList(petProfiles);
//         }
//     );
//     return () => unSubscribe();
//     }, []);

//     const handleAddingNewPetProfileToList = async (newPetProfile) => {
//         const collectionRef = collection(db, "petProfiles");
//         await addDoc(collectionRef, newPetProfile);
//         console.log("Added: ", newPetProfile)  
//     }
    
//     if (petProfileList.length === 0) {
//         return (
//             <div>
//                 <h1>Loading...</h1>
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <PetProfileList petProfiles={petProfileList} /> 
//             </div>
//         )
//     }
// }
    
// export default PetProfileControl
