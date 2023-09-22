import petProfileListReducer from "../../reducers/pet-profile-list-reducer";

describe('petProfileListReducer', () => {
    test('should add new profile to petProfileList', () => {
        // const initial state = {};
        const action = {
            type: 'ADD_PET_PROFILE',
            name: 'Fluffy',
            species: 'Cat',
            avatar: 'https://i.imgur.com/1q2xP1o.png',
            birthdayMonth: 'January',
            birthdayYear: '2019',
            microchip: '123456789',
            insuranceSelect: 'Yes',
            insuranceProvider: 'PetPlan',
            funFact: 'Fluffy loves to play fetch!',
            id: 1,
        };
        expect(petProfileListReducer({}, action)).toEqual({
            1: {
                name: 'Fluffy',
                species: 'Cat',
                avatar: 'https://i.imgur.com/1q2xP1o.png',
                birthdayMonth: 'January',
                birthdayYear: '2019',
                microchip: '123456789',
                insuranceSelect: 'Yes',
                insuranceProvider: 'PetPlan',
                funFact: 'Fluffy loves to play fetch!',
                id: 1,
            },
        });
    });
});
