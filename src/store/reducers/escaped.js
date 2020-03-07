import { UPDATE_ESCAPED } from '../types/escaped';

const initialState = {
    escaped: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case UPDATE_ESCAPED:
            return { ...state, escaped: [...payload] };

        default:
            return state;
    };
};
