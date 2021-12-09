import Link from 'next/link'
import Image from 'next/image'

export default function Overview({ datas }) {
    const { data, credits } = datas;
    const casts = credits.cast;
    const crews = credits.crew;
    const crewsRes = {};
    crewsRes.director = crews.filter((crew) => {
        return crew.job == 'Director';
    });
    crewsRes.producer = crews.filter((crew) => {
        return crew.job == 'Producer';
    });
    return (
        <div id="overview" className="tab active">
            <div className="row">
                <div
                    className="
                col-md-8
                col-sm-12
                col-xs-12
            "
                >
                    <p>{data.overview}</p>

                    <div className="title-hd-sm">
                        <h4>cast</h4>
                    </div>
                    {/* <!-- movie cast --> */}
                    <div className="mvcast-item">
                        {casts.map((cast) => (
                            <div key={cast.id} className="cast-it">
                                <div className=" cast-left ">
                                    <Image
                                        src={
                                            cast.profile_path == null
                                                ? '/images/uploads/cast1.jpg'
                                                : 'https://image.tmdb.org/t/p/original' +
                                                  cast.profile_path
                                        }
                                        alt=""
                                        height={100}
                                        width={70}
                                    />
                                    <Link href={'/people/' + cast.id}>
                                        <a >{cast.name}</a>
                                    </Link>
                                    
                                </div>
                                <p>{cast.character}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className="
                col-md-4
                col-xs-12
                col-sm-12
            "
                >
                    <div className="sb-it">
                        <h6>Director:</h6>
                        <p>
                            {crewsRes.director.map((crew) => (
                                <Link  key={crew.id} href={'/people/' + crew.id}>
                                    <a >{crew.name},</a>
                                </Link>
                            ))}
                        </p>
                    </div>
                    <div className="sb-it">
                        <h6>Producer:</h6>
                        <p>
                            {crewsRes.producer.map((crew) => (
                                <Link  key={crew.id} href={'/people/' + crew.id}>
                                    <a>{crew.name},</a>
                                </Link>
                                
                            ))}
                        </p>
                    </div>
                    <div className="sb-it">
                        <h6>Stars:</h6>
                        <p>
                            {casts.slice(0, 6).map((crew) => (
                                <Link   key={crew.id} href={'/people/' + crew.id}>
                                    <a>{crew.name}, </a>
                                </Link>
                                
                            ))}
                        </p>
                    </div>
                    <div className="sb-it">
                        <h6>Genres:</h6>
                        <p>
                            {data.genres.map((genre) => (
                                <Link key={genre.id} href="#">
                                    <a >{genre.name}, </a>
                                </Link>
                            ))}
                        </p>
                    </div>
                    <div className="sb-it">
                        <h6>Release Date:</h6>
                        <p>{data.release_date}</p>
                    </div>
                    <div className="sb-it">
                        <h6>Run Time:</h6>
                        <p>{data.runtime}min</p>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}
