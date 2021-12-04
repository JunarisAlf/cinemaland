import MovieSearchItem from '../Sub/Search/MovieSearchItem';

export default function MovieSearchResult() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
        <div className="page-single">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="flex-wrap-movielist mv-grid-fw">
                            {data.map((i) => (
                                <MovieSearchItem key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
