import React from 'react';
import SpeciesInput from './SpeciesInput';
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


function AvatarInput({species, setSpecies, avatar, selectedAvatar, handleAvatarSelect, petInfo, setPetInfo }) {
    
    if (!petInfo){
        return null;
    }
    
    return (
        <>
        <label htmlFor="avatar">Let's pick an avatar for your {petInfo.species}, {petInfo.name}.</label>
        {petInfo.species === 'cat' ? (
                <>
                <label htmlFor="avCatWhite">
                    <input
                        type="radio"
                        name="avatar"
                        id="avCatWhite"
                        value={avCat1Full}
                        onClick={() => handleAvatarSelect(avCat1Full)}
                        checked={selectedAvatar === avCat1Full}
                    />
                        <img className="avatar" src={avCat1Full} alt="White Cat Avatar" />
                </label>
                <label htmlFor="avCatBlack">
                    <input
                        type="radio"
                        name="avatar"
                        id="avCatBlack"
                        value={avCat2Full}
                        onClick={() => handleAvatarSelect(avCat2Full)}
                        checked = {selectedAvatar === avCat2Full}
                    />
                        <img className="avatar" src={avCat2Full} alt="Black Cat Avatar" />
                </label>
                <label htmlFor="avCatOrange">
                    <input
                        type="radio"
                        name="avatar"
                        id="avCatOrange"
                        value={avCat3Full}
                        onClick={() => handleAvatarSelect(avCat3Full)}
                        checked = {selectedAvatar === avCat3Full}
                    />
                        <img className="avatar" src={avCat3Full} alt="Orange Cat Avatar" />
                </label>
                <label htmlFor="avCatBlue">
                    <input
                        type="radio"
                        name="avatar"
                        id="avCatBlue"
                        value={avCat4Full}
                        onClick={() => handleAvatarSelect(avCat4Full)}
                        checked = {selectedAvatar === avCat4Full}
                    />
                        <img className="avatar" src={avCat4Full} alt="Blue Cat Avatar" />
                </label>
                <label htmlFor="avCatBrown">
                    <input
                        type="radio"
                        name="avatar"
                        id="avCatBrown"
                        value={avCat5Full}
                        onClick={() => handleAvatarSelect(avCat5Full)}
                        checked = {selectedAvatar === avCat5Full}
                    />
                        <img className="avatar" src={avCat5Full} alt="Brown Cat Avatar" />
                </label>
                <label htmlFor="avCatGrey">
                    <input
                        type="radio"
                        name="avatar"
                        id="avCatGrey"
                        value={avCat6Full}
                        onClick={() => handleAvatarSelect(avCat6Full)}
                        checked = {selectedAvatar === avCat6Full}
                    />
                        <img className="avatar" src={avCat6Full} alt="Grey Cat Avatar" />
                </label>
                <label htmlFor="avCatBlackWhite">
                    <input
                        type="radio"
                        name="avatar"
                        id="avCatBlackWhite"
                        value={avCat7Full}
                        onClick={() => handleAvatarSelect(avCat7Full)}
                        checked = {selectedAvatar === avCat7Full}
                    />
                        <img className="avatar" src={avCat7Full} alt="Black and White Cat Avatar" />
                </label>
                <label htmlFor="avCatBrownWhite">
                    <input
                        type="radio"
                        name="avatar"
                        id="avCatBrownWhite"
                        value={avCat8Full}
                        onClick={() => handleAvatarSelect(avCat8Full)}
                        checked = {selectedAvatar === avCat8Full}
                    />
                        <img className="avatar" src={avCat8Full} alt="Brown and White Cat Avatar" />
                </label>
                
                </>
              ) : (
                <>
                <label htmlFor="avDogWhite">
                    <input
                        type="radio"
                        name="avatar"
                        id="avDogWhite"
                        value={avDog1Full}
                        onClick={() => handleAvatarSelect(avDog1Full)}
                        checked = {selectedAvatar === avDog1Full}
                    />
                        <img className="avatar" src={avDog1Full} alt="White Dog Avatar" />
                </label>
                <label htmlFor="avDogBlack">
                    <input
                        type="radio"
                        name="avatar"
                        id="avDogBlack"
                        value={avDog2Full}
                        onClick={() => handleAvatarSelect(avDog2Full)}
                        checked = {selectedAvatar === avDog2Full}
                    />
                        <img className="avatar" src={avDog2Full} alt="Black Dog Avatar" />
                </label>
                <label htmlFor="avDogYellow">
                    <input
                        type="radio"
                        name="avatar"
                        id="avDogYellow"
                        value={avDog3Full}
                        onClick={() => handleAvatarSelect(avDog3Full)}
                        checked = {selectedAvatar === avDog3Full}
                    />
                        <img className="avatar" src={avDog3Full} alt="Yellow Dog Avatar" />
                </label>
                <label htmlFor="avDogBlue">
                    <input
                        type="radio"
                        name="avatar"
                        id="avDogBlue"
                        value={avDog4Full}
                        onClick={() => handleAvatarSelect(avDog4Full)}
                        checked = {selectedAvatar === avDog4Full}
                    />
                        <img className="avatar" src={avDog4Full} alt="Blue Dog Avatar" />
                </label>
                <label htmlFor="avDogBrown">
                    <input
                        type="radio"
                        name="avatar"
                        id="avDogBrown"
                        value={avDog5Full}
                        onClick={() => handleAvatarSelect(avDog5Full)}
                        checked = {selectedAvatar === avDog5Full}
                    />
                        <img className="avatar" src={avDog5Full} alt="Brown Dog Avatar" />
                </label>
                <label htmlFor="avDogGrey">
                    <input
                        type="radio"
                        name="avatar"
                        id="avDogGrey"
                        value={avDog6Full}
                        onClick={() => handleAvatarSelect(avDog6Full)}
                        checked = {selectedAvatar === avDog6Full}
                    />
                        <img className="avatar" src={avDog6Full} alt="Grey Dog Avatar" />
                </label>
                <label htmlFor="avDogBlackWhite">
                    <input
                        type="radio"
                        name="avatar"
                        id="avDogBlackWhite"
                        value={avDog7Full}
                        onClick={() => handleAvatarSelect(avDog7Full)}
                        checked = {selectedAvatar === avDog7Full}
                    />
                        <img className="avatar" src={avDog7Full} alt="Black and White Dog Avatar" />
                </label>
                <label htmlFor="avDogBrownWhite">
                    <input
                        type="radio"
                        name="avatar"
                        id="avDogBrownWhite"
                        value={avDog8Full}
                        onClick={() => handleAvatarSelect(avDog8Full)}
                        checked = {selectedAvatar === avDog8Full}
                    />
                        <img className="avatar" src={avDog8Full} alt="Brown and White Dog Avatar" />
                </label>
        
                </>
                )}
        </>
    )
}

export default AvatarInput;

