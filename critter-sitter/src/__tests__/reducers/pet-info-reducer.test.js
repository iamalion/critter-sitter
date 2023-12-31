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
    test ('should update microchip state slice when passed UPDATE_FIELD action', () => {
        const { microchip } = petInfoData;
        action = {
            type: 'UPDATE_FIELD',
            field: 'microchip',
            value: microchip,
        };
        expect(petInfoReducer({}, action)).toEqual({
            microchip: microchip,
        });
    });
    test ('should update insuranceSelect state slice when passed UPDATE_FIELD action', () => {
        const { insuranceSelect } = petInfoData;
        action = {
            type: 'UPDATE_FIELD',
            field: 'insuranceSelect',
            value: insuranceSelect,
        };
        expect(petInfoReducer({}, action)).toEqual({
            insuranceSelect: insuranceSelect,
        });
    });
    test ('should update insuranceProvider state slice when passed UPDATE_FIELD action', () => {
        const { insuranceProvider } = petInfoData;
        action = {
            type: 'UPDATE_FIELD',
            field: 'insuranceProvider',
            value: insuranceProvider,
        };
        expect(petInfoReducer({}, action)).toEqual({
            insuranceProvider: insuranceProvider,
        });
    });
    test ('should update funFact state slice when passed UPDATE_FIELD action', () => {
        const { funFact } = petInfoData;
        action = {
            type: 'UPDATE_FIELD',
            field: 'funFact',
            value: funFact,
        };
        expect(petInfoReducer({}, action)).toEqual({
            funFact: funFact,
        });
    });
});

