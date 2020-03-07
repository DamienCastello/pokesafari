import { UPDATE_CATCHED } from '../types/catched';

export const updateCatched = (catched) => {
    return {
        type: UPDATE_CATCHED,
        payload: [catched]
    };
};