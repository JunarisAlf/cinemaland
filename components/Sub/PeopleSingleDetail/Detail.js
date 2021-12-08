import TabContent from './TabContent';
export default function Detail({people, movies}) {
    return (
        <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="movie-single-ct main-content">
                <h1 className="bd-hd">{people.name}</h1>

                <div className="movie-tabs">
                    <div className="tabs">
                        <TabContent people={people} movies={movies}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
