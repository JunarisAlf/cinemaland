import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

export default function TabContent({ people, movies }) {
    // const casts = movies.cast;
    // const crews = movies.crew;
    const [active, setActive] = useState('cast');
    const mvData = active == 'cast' ? movies.cast : movies.crew;

    return (
        <div className="tab-content">
            <div id="overviewceb" className="tab active">
                <div className="row">
                    <div className="col-md-8 col-sm-12 col-xs-12">
                        <p>{people.biography}</p>

                        <div className="title-hd-sm my-title-hd-sm">
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
                        <div className="mvcast-item">
                            {mvData.map((movie) => (
                                <div key={movie.id} className="cast-it">
                                    <div className="cast-left cebleb-film">
                                        <Image
                                            src={
                                                movie.poster_path == null
                                                    ? '/images/uploads/film1.jpg'
                                                    : 'https://image.tmdb.org/t/p/original' +
                                                      movie.poster_path
                                            }
                                            width={55}
                                            height={100}
                                            alt=""
                                        />
                                        <div>
                                            <Link href={'/movie/' + movie.id}>
                                                <a >{movie.title} </a>
                                            </Link>
                                           
                                            <p className="time">
                                                {movie.character == null ? movie.job : movie.character}
                                            </p>
                                        </div>
                                    </div>
                                    <p>{movie.release_date?.substring(0, 4) ? movie.release_date.substring(0, 4) : movie.release_date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12 col-sm-12">
                        <div className="sb-it">
                            <h6>Also Known As: </h6>
                            <p>
                                {people.also_known_as.map((name) => (
                                    <Link key={name} href="#">
                                        <a >{name + ', '}</a>
                                    </Link>
                                    
                                ))}
                            </p>
                        </div>
                        <div className="sb-it">
                            <h6>Date of Birth: </h6>
                            <p>{people.birthday}</p>
                        </div>
                        <div className="sb-it">
                            <h6>Place of Birth: </h6>
                            <p>{people.place_of_birth}</p>
                        </div>
                        <div className="sb-it">
                            <h6>Deathday: </h6>
                            <p>{people.deathday == null ? '-' : people.deathday}</p>
                        </div>
                        <div className="sb-it">
                            <h6>Gender:</h6>
                            <p>{people.gender == 2 ? 'Male' : 'Female'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
