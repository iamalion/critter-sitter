import React from 'react';
import PropTypes from 'prop-types';
import avCat1 from '../../images/catImages/avCat1.svg'
import avCat2 from '../../images/catImages/avCat2.svg';
import avCat3 from '../../images/catImages/avCat3.svg';
import avCat4 from '../../images/catImages/avCat4.svg';
import avCat5 from '../../images/catImages/avCat5.svg';
import avCat6 from '../../images/catImages/avCat6.svg';
import avCat7 from '../../images/catImages/avCat7.svg';
import avCat8 from '../../images/catImages/avCat8.svg';
import avDog1 from '../../images/dogImages/avDog1.svg'; 
import avDog2 from '../../images/dogImages/avDog2.svg';
import avDog3 from '../../images/dogImages/avDog3.svg';
import avDog4 from '../../images/dogImages/avDog4.svg';
import avDog5 from '../../images/dogImages/avDog5.svg';
import avDog6 from '../../images/dogImages/avDog6.svg';
import avDog7 from '../../images/dogImages/avDog7.svg';
import avDog8 from '../../images/dogImages/avDog8.svg';
import { AvatarWrapper, AvatarOption } from '../../styles/Avatar.style.js';

function AvatarInput({ selectedAvatar, handleAvatarSelect, petInfo }) {

     const handleRadioChange = (value) => {
        handleAvatarSelect(value);
    };

    return (
        <>
        <AvatarWrapper>
        {petInfo.species === 'cat' ? (
            <>
                <AvatarOption checked={selectedAvatar === avCat1}>
                    <input
                    type="radio"
                    id="avCatWhite"
                    value={avCat1}
                    onChange={() => handleRadioChange(avCat1)}
                    checked={selectedAvatar === avCat1}
                    />
                    <img className="avatar" src={avCat1} alt="White Cat Avatar" />
                </AvatarOption>
                <AvatarOption checked={selectedAvatar === avCat2}>
                    <input
                    type="radio"
                    id="avCatBlack"
                    value={avCat2}
                    onChange={() => handleRadioChange(avCat2)}
                    checked={selectedAvatar === avCat2}
                    />
                    <img className="avatar" src={avCat2} alt="Black Cat Avatar" />
                </AvatarOption>
                
                <AvatarOption checked={selectedAvatar === avCat3}>
                    <input
                    type="radio"
                    id="avCatOrange"
                    value={avCat3}
                    onChange={() => handleRadioChange(avCat3)}
                    checked={selectedAvatar === avCat3}
                    />
                    <img className="avatar" src={avCat3} alt="Orange Cat Avatar" />
                </AvatarOption>
                <AvatarOption checked={selectedAvatar === avCat4}>
                    <input
                    type="radio"
                    id="avCatBlue"
                    value={avCat4}
                    onChange={() => handleRadioChange(avCat4)}
                    checked={selectedAvatar === avCat4}
                    />
                    <img className="avatar" src={avCat4} alt="Blue Cat Avatar" />
                </AvatarOption>
                <AvatarOption checked={selectedAvatar === avCat5}>
                    <input
                    type="radio"
                    id="avCatBrown"
                    value={avCat5}
                    onChange={() => handleRadioChange(avCat5)}
                    checked={selectedAvatar === avCat5}
                    />
                    <img className="avatar" src={avCat5} alt="Brown Cat Avatar" />
                </AvatarOption>
                <AvatarOption checked={selectedAvatar === avCat6}>
                    <input
                    type="radio"
                    id="avCatGrey"
                    value={avCat6}
                    onChange={() => handleRadioChange(avCat6)}
                    checked={selectedAvatar === avCat6}
                    />
                    <img className="avatar" src={avCat6} alt="Grey Cat Avatar" />
                </AvatarOption>
                <AvatarOption checked={selectedAvatar === avCat7}>
                    <input
                    type="radio"
                    id="avCatBlackWhite"
                    value={avCat7}
                    onChange={() => handleRadioChange(avCat7)}
                    checked={selectedAvatar === avCat7}
                    />
                    <img className="avatar" src={avCat7} alt="Black and White Cat Avatar" />
                </AvatarOption>
                <AvatarOption checked={selectedAvatar === avCat8}>
                    <input
                    type="radio"
                    id="avCatBrownWhite"
                    value={avCat8}
                    onChange={() => handleRadioChange(avCat8)}
                    checked={selectedAvatar === avCat8}
                    />
                    <img className="avatar" src={avCat8} alt="Brown and White Cat Avatar" />
                </AvatarOption>
            
            </>
                        
            ) : (
                <>
                <label htmlFor="avDogWhite">
                    <input
                        type="radio"
                        
                        id="avDogWhite"
                        value={avDog1}
                        onClick={() => handleAvatarSelect(avDog1)}
                        checked = {selectedAvatar === avDog1}
                    />
                        <img className="avatar" src={avDog1} alt="White Dog Avatar" />
                </label>
                <label htmlFor="avDogBlack">
                    <input
                        type="radio"
                        
                        id="avDogBlack"
                        value={avDog2}
                        onClick={() => handleAvatarSelect(avDog2)}
                        checked = {selectedAvatar === avDog2}
                    />
                        <img className="avatar" src={avDog2} alt="Black Dog Avatar" />
                </label>
                <label htmlFor="avDogYellow">
                    <input
                        type="radio"
                        
                        id="avDogYellow"
                        value={avDog3}
                        onClick={() => handleAvatarSelect(avDog3)}
                        checked = {selectedAvatar === avDog3}
                    />
                        <img className="avatar" src={avDog3} alt="Yellow Dog Avatar" />
                </label>
                <label htmlFor="avDogBlue">
                    <input
                        type="radio"
                        
                        id="avDogBlue"
                        value={avDog4}
                        onClick={() => handleAvatarSelect(avDog4)}
                        checked = {selectedAvatar === avDog4}
                    />
                        <img className="avatar" src={avDog4} alt="Blue Dog Avatar" />
                </label>
                <label htmlFor="avDogBrown">
                    <input
                        type="radio"
                        
                        id="avDogBrown"
                        value={avDog5}
                        onClick={() => handleAvatarSelect(avDog5)}
                        checked = {selectedAvatar === avDog5}
                    />
                        <img className="avatar" src={avDog5} alt="Brown Dog Avatar" />
                </label>
                <label htmlFor="avDogGrey">
                    <input
                        type="radio"
                        
                        id="avDogGrey"
                        value={avDog6}
                        onClick={() => handleAvatarSelect(avDog6)}
                        checked = {selectedAvatar === avDog6}
                    />
                        <img className="avatar" src={avDog6} alt="Grey Dog Avatar" />
                </label>
                <label htmlFor="avDogBlackWhite">
                    <input
                        type="radio"
                        
                        id="avDogBlackWhite"
                        value={avDog7}
                        onClick={() => handleAvatarSelect(avDog7)}
                        checked = {selectedAvatar === avDog7}
                    />
                        <img className="avatar" src={avDog7} alt="Black and White Dog Avatar" />
                </label>
                <label htmlFor="avDogBrownWhite">
                    <input
                        type="radio"
                        
                        id="avDogBrownWhite"
                        value={avDog8}
                        onClick={() => handleAvatarSelect(avDog8)}
                        checked = {selectedAvatar === avDog8}
                    />
                        <img className="avatar" src={avDog8} alt="Brown and White Dog Avatar" />
                </label>
            </>
            )}
            </AvatarWrapper>
        </>
    )
}

AvatarInput.propTypes = {
    selectedAvatar: PropTypes.string.isRequired,
    handleAvatarSelect: PropTypes.func.isRequired,
    petInfo: PropTypes.object,
}

export default AvatarInput;