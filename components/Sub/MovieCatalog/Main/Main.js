import React from 'react';
import MovieItemDetail from './MovieItemDetail';
import Tab from './Tab';

export default function Main({ datas }) {
    const {bestByGenreDatas, topRatedDatas} = datas;
    return (
        <div className="col-md-8">
            <div className="title-hd">
                <h2>BEST MOVIE BY GENRES</h2>
            </div>
            <Tab datas={bestByGenreDatas} />

            <div className="title-hd">
                <h2>TOP RATED</h2>
            </div>
            <MovieItemDetail datas={topRatedDatas}/>
        </div>
    );
}
