import React from 'react';
// import PropTypes from 'prop-types'
import {connect} from 'react-redux';

const Info = ({name,x,y,width,height,result}) => {
    return (
        <div>
            <label>Name:
            </label>
            <input type="text" readOnly={true} value ={name}/>
            <label>X-position:
            </label>
            <input type="text"  readOnly={true} value ={x}/>
            <label>Y-position:
            </label>
            <input type="text" readOnly={true} value={y}/>
            <label>Width:
            </label>
            <input type="text" readOnly={true} value={width}/>
            <label>Height:
            </label>
            <input type="text" readOnly={true} value={height}/>
            <label>Result:
            </label>
            <input type="text" readOnly={true} value={result}/>
        </div>
    );
}

export default connect(null, null)(Info);
