import Navigation from '../Sub/Header/Navigation';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function Header({keywordURL = '', kindURL = 'movie'}) {
    const route = useRouter()

    const [kind, setKind] = useState(kindURL);

    const [keyword, setKeyword] = useState(keywordURL);
    const handler =({kind, keyword}) =>{
        route.push('/search?'+kind+'=' + keyword)
    }

    return (
        <header className="ht-header">
            <div className="container">
                <Navigation />
                <div className="top-search">
                    <select onChange={(e) => setKind(e.target.value)}>
                        <option value="movie">Movie</option>
                        <option value="people">People</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search for a movie or people that you are looking for"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handler({kind, keyword})}
                    />
                    <div className="my-search-icon" onClick={()=>handler({kind, keyword})}>
                        <img src="/search.svg" alt="" height="30" width="30"/>
                    </div>
                </div>
            </div>
        </header>
    );
}
