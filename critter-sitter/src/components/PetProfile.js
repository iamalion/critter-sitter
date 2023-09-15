import React from 'react';
import avCat1Full from '../images/catImages/avCat1Full.png';
import avDog1Full from '../images/dogImages/avDog1Full.svg';

function PetProfile({}) {
 const [petInfo, setPetInfo] = React.useState(
        {
            name: '',
            species: '',
            avatar: '',
            birthday: '',
            breed: '',
            weight: '',
            microchip: '',
            license: '',
            insurance: '',
            funFact: '',
        }
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPetInfo({ ...petInfo, [name]: value });
    };

    return (
        <>
        <img src={avDog1Full} alt="dog avatar" />
        <img src={avCat1Full} alt="cat avatar" />
        <div data-testid="pet-profile-1">
            <h2>Let's talk about your buddy!</h2>
        </div>
        <div>
            <form>
                <label htmlFor='name'>What's their name?</label>
                <input type="text" name="name" id="name" 
                value={petInfo.name} 
                onChange={handleInputChange} />
                <p>Hi {petInfo.name}!</p>
                <label htmlFor='species'>Is {petInfo.name} a cat or a dog?</label>
                <input type="radio" name="type" id="type" value="cat" />Meow!
                <input type="radio" name="type" id="type" value="dog" />Woof!
            </form>

        </div>
        </>
    )
}
export default PetProfile;