import {TOGGLE_OK, TOGGLE_NG, TOGGLE_FC} from './actionTypes';
import {ResultTypes} from '../constant';

// 注意！有两个以上（含两个）组件需要combineReducers的貌似各自reducer需要对自己的状态参数
// 在此处传入时要给一个默认的结构赋值，否则可能第一次无法刷新成功，这与Store中的初始值无关
// Store中的初始值仍然会负责初始值来替代这里默认值
export default(filters={}, action) => {
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