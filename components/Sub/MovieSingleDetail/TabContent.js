import React from 'react';

import Overview from './TabItem/Overview';


export default function TabContent({data, credits}) {
    return (
        <div className="tab-content">
            <Overview datas={{data, credits}}/>
    
        </div>
    );
}
