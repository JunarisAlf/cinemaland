import Main from '../Sub/MovieCatalog/Main/Main';
import Side from '../Sub/MovieCatalog/Side/Side';

export default function MovieCatalog() {
    return (
        <div className="movie-items">
            <div className="container">
                <div className="row ipad-width">
                    <Main />
                    <Side />
                </div>
            </div>
        </div>
    );
}
