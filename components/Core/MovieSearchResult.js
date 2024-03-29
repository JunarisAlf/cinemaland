import MovieSearchItem from '../Sub/Search/MovieSearchItem';

export default function MovieSearchResult({result}) {
    const data = result.results;
    return (
        <div className="page-single">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="flex-wrap-movielist mv-grid-fw">
                            {data.map((movie) => (
                                <MovieSearchItem key={movie.id} movie={movie}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
