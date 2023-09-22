const petProfileListReducer = (state = {}, action) => {
    const { name, species, avatar, birthdayMonth, birthdayYear, microchip, insuranceSelect, insuranceProvider, funFact, id } = action;
    switch (action.type) {
        case 'ADD_PET_PROFILE':
            return Object.assign({}, state, {
                [id]: {
                    name: name,
                    species: species,
                    avatar: avatar,
                    birthdayMonth: birthdayMonth,
                    birthdayYear: birthdayYear,
                    microchip: microchip,
                    insuranceSelect: insuranceSelect,
                    insuranceProvider: insuranceProvider,
                    funFact: funFact,
                    id: id,
                }
            });
        case 'DELETE_PET_PROFILE':
            const newState = { ...state };
            delete newState[id];
            return newState;
        default:
            return state;
    }
} 

export default petProfileListReducer;