import React from 'react';
// import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {PieChart, Pie, Cell} from 'recharts'

// import {okColor, ngColor, fcColor} from '../../constant'
import './style.css'
import { ResultTypes ,okColor, ngColor, fcColor} from '../../constant';




function getResultsCnt(comps){
    let okCnt=0;
    let ngCnt=0;
    let fcCnt=0;
    for(let i in comps)
    {
        switch(comps[i].result)
        {
            case ResultTypes.OK:
            {
                okCnt++;
                break;
            }
            case ResultTypes.NG:
            {
                ngCnt++;
                break;
            }
            case ResultTypes.FC:
            {
                fcCnt++;
                break;
            }
            default:
            {
                throw new Error("the type is not supported!");
            }            
        }
    }
    let obj = {};
    obj[ResultTypes.OK] = okCnt;
    obj[ResultTypes.NG] = ngCnt;
    obj[ResultTypes.FC] = fcCnt;
    return obj;
}

const COLORS = [okColor, ngColor, fcColor];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx
            ? 'start'
            : 'end'}
            dominantBaseline="central">
            {`${ (percent * 100).toFixed(0)}%`}
        </text>
    );
};


const RcPieChart = ({comps}) => {
    let cnt = getResultsCnt(comps);
    const data = [
        {
            name: 'OK',
            value: cnt[ResultTypes.OK]
        }, {
            name: 'NG',
            value: cnt[ResultTypes.NG]
        }, {
            name: 'FC',
            value: cnt[ResultTypes.FC]
        }
    ];
    return (
        <div className="chartStyle">
        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
            <Pie
                data={data}
                cx={300}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8">
                {data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)}
            </Pie>
        </PieChart>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return {
        comps: state.comps,
      }
}

export default connect(mapStateToProps,null)(RcPieChart)