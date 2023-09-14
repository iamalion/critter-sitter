import React from 'react';

function PetProfile({}) {
 const [petInfo, setPetInfo] = React.useState(
        {
            name: '',
            type: '',
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
        <div data-testid="pet-profile-1">
            <h2>Let's talk about your buddy!</h2>
        </div>
    )
}
export default PetProfile;