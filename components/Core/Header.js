import Navigation from '../Sub/Header/Navigation';
import { useState } from 'react';

export default function Header({setKind, setKeyword, kind, keyword}) {

    return (
        <header className="ht-header">
            <div className="container">
                <Navigation />
                <div className="top-search">
                    <select onChange={(e)=> setKind(e.target.value)}>
                        <option value='movie' >Movie</option>
                        <option value='people' >People</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search for a movie or people that you are looking for"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>
            </div>
        </header>
    );
}
