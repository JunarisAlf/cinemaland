import React from 'react';
import MovieItemDetail from './MovieItemDetail';
import Tab from './Tab';
import Title from './Title';

export default function Main() {
    return (
        <div className="col-md-8">
            <Title />
            <Tab />

            <Title />
            <MovieItemDetail />
        </div>
    );
}
