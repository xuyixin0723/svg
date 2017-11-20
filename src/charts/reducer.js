import {DO_INTERVAL_REFRESH} from './actionTypes';


export default(chartData=[], action) => {
    switch (action.type) {
        case DO_INTERVAL_REFRESH:
            {
                return chartData;
            }       
        default:
            {
                return chartData;
            }
    }
}