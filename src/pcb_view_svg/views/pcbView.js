import React from 'react';
import CreateComps from './createComps';
import CompsView from './compsView';
import './style.css'

export default() => {
    return(
        <div className="pcbViewStyle">
            <CreateComps />
            <CompsView  />
        </div>
    );
}