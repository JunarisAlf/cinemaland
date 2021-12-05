import Main from '../Sub/MovieCatalog/Main/Main';
import Side from '../Sub/MovieCatalog/Side/Side';

export default function MovieCatalog({ mainDatas, sideDatas }) {

    return (
        <div className="movie-items">
            <div className="container">
                <div className="row ipad-width">
                    <Main datas={mainDatas} />
                    <Side datas={sideDatas}/>
                </div>
            </div>
        </div>
    );
}
