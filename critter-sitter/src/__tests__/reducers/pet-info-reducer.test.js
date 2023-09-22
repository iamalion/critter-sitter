import petInfoReducer from "../../reducers/petInfoReducer";

describe('petInfoReducer', () => {
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
});

