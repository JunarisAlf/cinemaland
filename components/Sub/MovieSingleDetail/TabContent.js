import React from 'react';
import Cast from './TabItem/Cast';
import Media from './TabItem/Media';
import Overview from './TabItem/Overview';
import Related from './TabItem/Related';
import Review from './TabItem/Review';

export default function TabContent({data, credits}) {
    return (
        <div className="tab-content">
            <Overview datas={{data, credits}}/>
            <Review />
            <Cast />
            <Media />
            <Related />
        </div>
    );
}
