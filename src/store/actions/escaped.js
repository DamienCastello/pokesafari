import { UPDATE_ESCAPED } from '../types/escaped';

export const updateEscaped  = (escaped) => {
    return{
        type: UPDATE_ESCAPED,
        payload: [escaped]
    };
};