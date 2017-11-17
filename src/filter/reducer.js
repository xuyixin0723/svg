import {TOGGLE_OK, TOGGLE_NG, TOGGLE_FC} from './actionTypes';
import {ResultTypes} from '../constant';

export default(filters={"a": false, "b": true, "TOGGLE_FC": true}, action) => {
    switch (action.type) {
        case TOGGLE_OK:
            {
                return {
                    ...filters,
                    [ResultTypes.OK]: !filters[ResultTypes.OK]
                }
            }
        case TOGGLE_NG:
            {
                return {
                    ...filters,
                    [ResultTypes.NG]: !filters[ResultTypes.NG]
                }
            }
        case TOGGLE_FC:
            {
                return {
                    ...filters,
                    [ResultTypes.FC]: !filters[ResultTypes.FC]
                }
            }
        default:
            {
                return filters;
            }
    }
}