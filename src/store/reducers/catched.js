import { UPDATE_CATCHED } from '../types/catched';

const initialState = {
    catched: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case UPDATE_CATCHED:
            return { ...state, catched: [...payload] };

        default:
            return state;
    };
};
