import petInfoReducer from "../../reducers/pet-info-reducer";

describe('petInfoReducer', () => {
    let action;
    const petInfoData = {
        name: 'Fluffy',
        species: 'Cat',
        avatar: 'https://i.imgur.com/1q2xP1o.png',
        birthdayMonth: 'January',
        birthdayYear: '2019',
        microchip: '123456789',
        insuranceSelect: 'Yes',
        insuranceProvider: 'PetPlan',
        funFact: 'Fluffy loves to play fetch!',
    };

    test('should return the initial state', () => {
        expect(petInfoReducer(undefined, {})).toEqual({
            name: '',
            species: '',
            avatar: '',
            birthdayMonth: '',
            birthdayYear: '',
            microchip: '',
            insuranceSelect: '',
            insuranceProvider: '',
            funFact: '',
        });
    });

    test('should update name state slice when passed UPDATE_FIELD action', () => {
        const { name } = petInfoData;
        action = {
            type: 'UPDATE_FIELD',
            field: 'name',
            value: name,
        };
        expect(petInfoReducer({}, action)).toEqual({
            name: name,
        });
    });

    test('should update species state slice when passed UPDATE_FIELD action', () => {
        const { species } = petInfoData;
        action = {
            type: 'UPDATE_FIELD',
            field: 'species',
            value: species,
        };
        expect(petInfoReducer({}, action)).toEqual({
            species: species,
        });
    });

    test ('should update avatar state slice when passed UPDATE_FIELD action', () => {
        const { avatar } = petInfoData;
        action = {
            type: 'UPDATE_FIELD',
            field: 'avatar',
            value: avatar,
        };
        expect(petInfoReducer({}, action)).toEqual({
            avatar: avatar,
        });
    });

    test ('should update birthdayMonth state slice when passed UPDATE_FIELD action', () => {
        const { birthdayMonth } = petInfoData;
        action = {
            type: 'UPDATE_FIELD',
            field: 'birthdayMonth',
            value: birthdayMonth,
        };
        expect(petInfoReducer({}, action)).toEqual({
            birthdayMonth: birthdayMonth,
        });
    });

    test ('should update birthdayYear state slice when passed UPDATE_FIELD action', () => {
        const { birthdayYear } = petInfoData;
        action = {
            type: 'UPDATE_FIELD',
            field: 'birthdayYear',
            value: birthdayYear,
        };
        expect(petInfoReducer({}, action)).toEqual({
            birthdayYear: birthdayYear,
        });
    });

    
});

