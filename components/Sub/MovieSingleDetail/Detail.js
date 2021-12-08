import TabContent from './TabContent';
import Link from 'next/link'


export default function Detail({ movie, credits }) {
    const vote = [...Array(parseInt(movie.vote_average)).keys()];
    const downVote = [...Array(parseInt(10 - vote.length)).keys()];

    return (
        <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="movie-single-ct main-content">
                <h1 className="bd-hd">
                    {movie.title}{' '}
                    <span>{movie.release_date.substring(0, 4)}</span>
                </h1>

                <div className="movie-rate">
                    <div className="rate">
                        <i className="ion-android-star"></i>
                        <p>
                            <span>{movie.vote_average}</span> /10
                            <br />
                        </p>
                    </div>
                    <div className="rate-star">
                        <p>Rating:</p>
                        <div className="star">
                            {vote.map((i) => (
                                <i key={i} className="ion-ios-star"></i>
                            ))}
                            {downVote.map((i) => (
                                <i key={i} className="ion-ios-star-outline"></i>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="movie-tabs">
                    <div className="tabs">
                        <ul className="tab-links tabs-mv">
                            <li className="active">
                                <Link href="#overview">
                                    <a >Overview</a>
                                </Link>
                                
                            </li>
                            
                        </ul>
                        <TabContent data={movie} credits={credits} />
                    </div>
                </div>
            </div>
        </div>
    );
}
