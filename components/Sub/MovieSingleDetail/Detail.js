import TabContent from './TabContent';

export default function Detail() {
    return (
        <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="movie-single-ct main-content">
                <h1 className="bd-hd">
                    Skyfall: Quantum of Spectre <span>2015</span>
                </h1>

                <div className="movie-rate">
                    <div className="rate">
                        <i className="ion-android-star"></i>
                        <p>
                            <span>8.1</span> /10
                            <br />
                            <span className="rv">56 Reviews</span>
                        </p>
                    </div>
                    <div className="rate-star">
                        <p>Rate This Movie:</p>
                        <i className="ion-ios-star"></i>
                        <i className="ion-ios-star"></i>
                        <i className="ion-ios-star"></i>
                        <i className="ion-ios-star"></i>
                        <i className="ion-ios-star"></i>
                        <i className="ion-ios-star"></i>
                        <i className="ion-ios-star"></i>
                        <i className="ion-ios-star"></i>
                        <i className="ion-ios-star-outline"></i>
                    </div>
                </div>

                <div className="movie-tabs">
                    <div className="tabs">
                        <ul className="tab-links tabs-mv">
                            <li className="active">
                                <a href="#overview">Overview</a>
                            </li>
                            <li>
                                <a href="#reviews"> Reviews</a>
                            </li>
                            <li>
                                <a href="#cast"> Cast & Crew </a>
                            </li>
                            <li>
                                <a href="#media"> Media</a>
                            </li>
                            <li>
                                <a href="#moviesrelated">Related Movies</a>
                            </li>
                        </ul>
                        <TabContent />
                    </div>
                </div>
            </div>
        </div>
    );
}
