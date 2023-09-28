import React from 'react';
import PropTypes from 'prop-types';
import PetProfile from './PetProfile';

function PetProfileDetail({ petInfo, editing, onEditPetProfile, onClickingDelete }) {
  if (!petInfo) {
    return (
      <div>
        <h1>No pet profile here!</h1>
      </div>
    );
  }

  return (
    <>
      <img className="avatar" src={petInfo.avatar} alt="Selected Avatar"></img>
      <h1>{petInfo.name} the {petInfo.species}</h1>
      <p>Birthday: {petInfo.birthdayMonth}/{petInfo.birthdayYear}</p>
      <p>Microchip: {petInfo.microchip ? petInfo.microchip : `n/a`}</p>
      <p>Insurance: {petInfo.insuranceProvider ? petInfo.insuranceProvider : `n/a`}</p>
      <p>Fun Fact: {petInfo.funFact ? petInfo.funFact : `${petInfo.name} has so many fun facts I can't pick one!`}</p>

      {editing ? (
        <button onClick={onEditPetProfile}>Save Changes</button>
      ) : (
        <button onClick={onEditPetProfile}>Edit Pet Profile</button>
      )}

      <button onClick={onClickingDelete}>Delete Pet Profile</button>
    </>
  );
}

PetProfileDetail.propTypes = {
  petInfo: PropTypes.object,
  editing: PropTypes.bool,
  onEditPetProfile: PropTypes.func,
  onClickingDelete: PropTypes.func,
};

export default PetProfileDetail;




// Old code:
// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { initialPetInfo } from '../reducers/pet-info-reducer';
// import { useParams, Link } from 'react-router-dom';
// import { doc, getDoc, deleteDoc } from 'firebase/firestore';
// import db from '../firebase';

// function PetProfileDetail(props){
//     const { id } = useParams();
//     const [petInfo, setPetInfo] = useState(initialPetInfo, {});
//     const [editing, setEditing] = useState(false);

//     const onClickingEdit = async () => {
//         const docRef = doc(db, "petProfiles", id);
//         const docSnapshot = await getDoc(docRef);
//         try {
//             if (docSnapshot.exists()) {
//                 const petProfile = docSnapshot.data();
//                 setPetInfo(petProfile);
//                 setEditing(true);
//             }

//         } catch (error) {
//             console.error("Error editing document: ", error);
//         }
//     }
       

//     const onClickingDelete = async () => {
//         const docRef = doc(db, "petProfiles", id);
//         try {
//             await deleteDoc(docRef);
//             navigate(`/view`);
//         } catch (error) {
//             console.error("Error removing document: ", error);
//         }
//     }
    
//     useEffect(() => {
//         async function getPetProfile() {
//             try {
//                 const docRef = doc(db, "petProfiles", id);
//                 const docSnapshot = await getDoc(docRef);

//                 if (docSnapshot.exists()) {
//                     const petProfile = docSnapshot.data();
//                     setPetInfo(petProfile);

//                 }
//             } catch (error) {
//                 console.error("Error fetching pet profile: ", error);
//             }
//         }

//         getPetProfile(); 
//     }, [id]);

//     if (!petInfo) {
//         return (
//             <div>
//                 <h1>No pet profile here!</h1>
//             </div>
//         );
//     }

//     return (
//         <>
//             <img className="avatar" src={petInfo.avatar} alt="Selected Avatar"></img>
//             <h1>{petInfo.name} the {petInfo.species}</h1>
//             <p>Birthday: {petInfo.birthdayMonth}/{petInfo.birthdayYear}</p>
//             <p>Microchip: {petInfo.microchip ? petInfo.microchip : `n/a`}</p>
//             <p>Insurance: {petInfo.insuranceProvider ? petInfo.insuranceProvider : `n/a`}</p>
//             <p>Fun Fact: {petInfo.funFact ? petInfo.funFact : `${petInfo.name} has so many fun facts I can't pick one!`}</p>
//             <button onClick={onClickingEdit}>Edit Pet Profile</button>
            
//             <button onClick={()=> onClickingDelete(id)}>Delete Pet Profile</button>
//         </>
//     );
//     }   

// PetProfileDetail.propTypes = {
//     petProfile: PropTypes.object,
//     onClickingDelete: PropTypes.func,
//     onClickingEdit: PropTypes.func
// };

// export default PetProfileDetail;