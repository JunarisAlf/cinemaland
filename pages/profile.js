import Header from '../components/Core/Header';
import Head from 'next/head';
import Image from 'next/image'


export async function getStaticProps() {
    const profile = {
        name: 'Junaris Alfianto',
        alsoKnowAs: 'juna/jun',
        gender: 'male',
        birth: '07 June 2001',
        placeOfBirth: 'Kuantan Singingi, Riau',
        study: 'Universitas Muhammadiyah Riau',
        description: '-',
    };
    return {
        props: { profile },
    };
}

export default function People({ profile }) {
    const poster = require('../public/images/myImg.jpg');
    return (
        <div>
            <Head>
                <title>profile</title>
            </Head>
            <Header />
            <div className="page-single movie-single movie_single my-movie-single">
                <div className="container">
                    <div className="row ipad-width2">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="movie-img my-single-movie-img my-image-fill">
                                <Image
                                    className="my-image-fill"
                                    src={
                                        poster
                                    }
                                    alt=""
                                    layout="responsive"
                                    width={340}
                                    height={521}
                                />
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="movie-single-ct main-content">
                                <h1 className="bd-hd">{profile.name}</h1>
                                <div className="movie-tabs">
                                    <div className="tabs">
                                        <div className="tab-content">
                                            <div
                                                id="overviewceb"
                                                className="tab active"
                                            >
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-12 col-xs-12">
                                                        <p>
                                                            {
                                                                profile.description
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="col-md-4 col-xs-12 col-sm-12">
                                                        <div className="sb-it">
                                                            <h6>
                                                                Also Known As:{' '}
                                                            </h6>
                                                            <p>
                                                                {
                                                                    profile.alsoKnowAs
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>
                                                                Date of Birth:{' '}
                                                            </h6>
                                                            <p>
                                                                {profile.birth}
                                                            </p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>
                                                                Place of Birth:{' '}
                                                            </h6>
                                                            <p>
                                                                {
                                                                    profile.placeOfBirth
                                                                }
                                                            </p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Gender:</h6>
                                                            <p>
                                                                {profile.gender}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
