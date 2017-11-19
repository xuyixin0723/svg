import {CREATE_COMPS, SELECT_COMP} from './actionTypes';
import {ResultTypes} from '../constant'
import {unselectedColor, viewWidth, viewHeight, okColor, ngColor, fcColor} from './constant'

// 切记，一定要有#号，前端最恶心的就是它不会报错，不打#只是使用默认颜色，一切照常, 但这会导致以为mapStateToProps没有发生作用
export const createComps = (compCnt) => {
    let arr = [];
    let comp = {};
    for (let i = 0; i < compCnt; i++) {
        comp = {
            x: parseInt(Math.random() * (viewWidth - 10), 0),
            y: parseInt(Math.random() * (viewHeight - 10), 0),
            width: 10,
            height: 10,
            id: i,
            name: "component" + i,
            stroke: unselectedColor,
            isSelected: false,
            result: (Math.random() > 0.3)
                ? ResultTypes.OK
                : ((Math.random() > 0.2)
                    ? ResultTypes.NG
                    : ResultTypes.FC)
        }
        switch (comp.result) {
            case ResultTypes.NG:
                comp.fill = ngColor;
                break;
            case ResultTypes.FC:
                comp.fill = fcColor;
                break;
            default:
                comp.fill = okColor;
                break;
        }
        arr.push(comp);
    }
    return {type: CREATE_COMPS, compArr: arr}
};

export const selectComp = (id) => ({type: SELECT_COMP, id: id});