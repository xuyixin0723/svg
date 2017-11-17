import {CREATE_COMPS, SELECT_COMP} from './actionTypes';
import {unselectedColor, selectedColor} from './constant'

let lastSelectedID = -1; // 不赋值会导致undefined，针对这个案例后续使用上会有可运行的隐性bug
let resetID = -1; // 请思考为什么要有这个参数，大家可以取消这个参数来观察会发生些什么

// 注意！有两个以上（含两个）组件需要combineReducers的貌似各自reducer需要对自己的状态参数
// 在此处传入时要给一个默认的结构赋值，否则可能第一次无法刷新成功，这与Store中的初始值无关
// Store中的初始值仍然会负责初始值来替代这里默认值
export default(comps=[], action) => { // 这个组件state就是代指store中state.comps，这里作者命名很差，容易误解
    switch (action.type) {
        case CREATE_COMPS:
            {
                return action.compArr;
            }
        case SELECT_COMP:
            {
                resetID = lastSelectedID;
                return comps.map((comp) => {
                    if (comp.id === action.id) { 
                        lastSelectedID = comp.id;
                        return {
                            ...comp,
                            stroke: selectedColor
                        };
                    }
                    if(comp.id === resetID)
                    {
                        return {
                            ...comp,
                            stroke: unselectedColor
                        };
                    }
                    return comp;
                })
            }
        default:
            {
                return comps;
            }
    }
}