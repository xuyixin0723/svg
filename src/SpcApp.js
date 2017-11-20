import React from 'react';
import {view as PcbView} from './pcb_view_svg/';
import {view as Filter} from './filter'
import {view as Charts} from './charts'

// import {view as Filter} from './filter';

import './style.css'

function SpcApp() {
    return (
        <div >
            <Filter/>
            <PcbView/>
            <Charts/>
        </div>
    );
}

export default SpcApp;