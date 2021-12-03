import React from 'react';
import Cast from './TabItem/Cast';
import Media from './TabItem/Media';
import Overview from './TabItem/Overview';
import Related from './TabItem/Related';
import Review from './TabItem/Review';

export default function TabContent() {
    return (
        <div className="tab-content">
            <Overview />
            <Review />
            <Cast />
            <Media />
            <Related />
        </div>
    );
}
