import {CREATE_COMPS, SELECT_COMP} from './actionTypes';
import {unselectedColor, selectedColor} from './constant'

let lastSelectedID = -1; // 不赋值会导致undefined，针对这个案例后续使用上会有可运行的隐性bug
let resetID = -1; // 请思考为什么要有这个参数，大家可以取消这个参数来观察会发生些什么
export default(comps = [], action) => { // 这个组件state就是代指store中state.comps，这里作者命名很差，容易误解
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
                            color: selectedColor
                        };
                    }
                    if(comp.id === resetID)
                    {
                        return {
                            ...comp,
                            color: unselectedColor
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