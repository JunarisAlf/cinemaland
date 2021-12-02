import Navigation from '../Sub/Header/Navigation';

export default function Header() {
    return (
        <header className="ht-header">
            <div className="container">
                <Navigation />
                <div className="top-search">
                    <select>
                        <option value="united">TV show</option>
                        <option value="saab">Others</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search for a movie, TV Show or celebrity that you are looking for"
                    />
                </div>
            </div>
        </header>
    );
}
