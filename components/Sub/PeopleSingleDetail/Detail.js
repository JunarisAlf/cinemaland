import TabContent from './TabContent';
export default function Detail() {
    return (
        <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="movie-single-ct main-content">
                <h1 className="bd-hd">Skyfall: Quantum of Spectre</h1>

                <div className="movie-tabs">
                    <div className="tabs">
                        <ul className="tab-links tabs-mv">
                            <li className="active">
                                <a href="#overviewceb">Overview</a>
                            </li>
                            <li>
                                <a href="#biography"> biography</a>
                            </li>
                            <li>
                                <a href="#mediaceb"> Media</a>
                            </li>
                            <li>
                                <a href="#filmography">filmography</a>
                            </li>
                        </ul>
                        <TabContent />
                    </div>
                </div>
            </div>
        </div>
    );
}
