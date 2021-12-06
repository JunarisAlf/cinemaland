import { useState } from 'react';

export default function TabContent({ people, movies }) {
    // const casts = movies.cast;
    // const crews = movies.crew;
    const [active, setActive] = useState('cast');
    const mvData = active == 'cast' ? movies.cast : movies.crew;

    return (
        <div class="tab-content">
            <div id="overviewceb" class="tab active">
                <div class="row">
                    <div class="col-md-8 col-sm-12 col-xs-12">
                        <p>{people.biography}</p>

                        <div class="title-hd-sm my-title-hd-sm">
                            <h4
                                className={active == 'cast' ? 'h4-active' : ''}
                                onClick={() => {
                                    setActive('cast');
                                }}
                            >
                                CAST
                            </h4>{' '}
                            |
                            <h4
                                className={active == 'crew' ? 'h4-active' : ''}
                                onClick={() => {
                                    setActive('crew');
                                }}
                            >
                                CREW
                            </h4>
                        </div>
                        <div class="mvcast-item">
                            {mvData.map((movie) => (
                                <div class="cast-it">
                                    <div class="cast-left cebleb-film">
                                        <img
                                            src={
                                                movie.poster_path == null
                                                    ? '/images/uploads/film1.jpg'
                                                    : 'https://image.tmdb.org/t/p/original' +
                                                      movie.poster_path
                                            }
                                            width={55}
                                            height={77}
                                            alt=""
                                        />
                                        <div>
                                            <a href={'/movie/' + movie.id}>{movie.title} </a>
                                            <p class="time">
                                                {movie.character == null ? movie.job : movie.character}
                                            </p>
                                        </div>
                                    </div>
                                    <p>{movie.release_date.substring(0, 4)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="col-md-4 col-xs-12 col-sm-12">
                        <div class="sb-it">
                            <h6>Also Known As: </h6>
                            <p>
                                {people.also_known_as.map((name) => (
                                    <a href="#">{name + ', '}</a>
                                ))}
                            </p>
                        </div>
                        <div class="sb-it">
                            <h6>Date of Birth: </h6>
                            <p>{people.birthday}</p>
                        </div>
                        <div class="sb-it">
                            <h6>Place of Birth: </h6>
                            <p>{people.place_of_birth}</p>
                        </div>
                        <div class="sb-it">
                            <h6>Deathday: </h6>
                            <p>{people.deathday == null ? '-' : people.deathday}</p>
                        </div>
                        <div class="sb-it">
                            <h6>Gender:</h6>
                            <p>{people.gender == 2 ? 'Male' : 'Female'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
