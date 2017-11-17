import React from 'react';
import {view as PcbView} from './pcb_view/';
import {view as Filter} from './filter'
// import {view as Filter} from './filter';

function SpcApp() {
    return (
        <div>
            <Filter />
            <PcbView />
        </div>
    );
}

export default SpcApp;