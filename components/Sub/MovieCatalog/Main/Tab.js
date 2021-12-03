import MovieItem from './MovieItem';
import TabLink from './TabLink';
export default function Tab() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <div className="tabs">
            <TabLink />

            <div className="tab-content">
                <div id="tab1" className="tab active">
                    <div className="row my-container">
                        {data.map((i) => (
                            <MovieItem key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
