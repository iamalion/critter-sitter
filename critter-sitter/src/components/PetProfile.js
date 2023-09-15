import React from 'react';

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