import Detail from '../Sub/PeopleSingleDetail/Detail';
import ImageSticky from '../Sub/MovieSingleDetail/ImageSticky';

export default function PeopleSingleDetail({people, movies}) {
    return (
        <div className="page-single movie-single movie_single my-movie-single">
            <div className="container">
                <div className="row ipad-width2">
                    <ImageSticky poster={people.profile_path}/>
                    <Detail people={people} movies={movies}/>
                </div>
            </div>
        </div>
    );
}
