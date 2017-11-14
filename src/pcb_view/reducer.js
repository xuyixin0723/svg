import {CREATE_COMPS} from './actionTypes';

export default(state = [], action) => {
    switch (action.type) {
        case CREATE_COMPS:
            {
                return action.compArr;
            }
        default:
            {
                return state;
            }
    }
}
