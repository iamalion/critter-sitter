export const initialPetInfo = {
    name: '',
    species: '',
    avatar: '',
    birthdayMonth: '',
    birthdayYear: '',
    microchip: '',
    insuranceSelect: '',
    insuranceProvider: '',
    funFact: '',
};

const petInfoReducer = (state = initialPetInfo, action) => {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return { ...state, [action.field]: action.value };
      default:
        return state;
    }
  };

export default petInfoReducer;