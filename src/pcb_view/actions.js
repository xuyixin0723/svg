import {CREATE_COMPS} from './actionTypes';
import {ResultTypes} from '../constant'


export const createComps = (compCnt) => {

    let arr = [];
    let comp = {};
    let nextCompId = 0;
    for (let i = 0; i < compCnt; i++)
    {
        comp = {
            x: parseInt(Math.random()*1490,0),
            y: parseInt(Math.random()*990,0),
            width: parseInt(Math.random()*10,0),
            height: parseInt(Math.random()*10,0),
            id: ++nextCompId,
            name: "component" + i,
            result: (Math.random()>0.2)?ResultTypes.OK:((Math.random()>0.1)?ResultTypes.NG:ResultTypes.FC)       
        }
        arr.push(comp);
    } 
    return {type: CREATE_COMPS, compArr: arr}
};