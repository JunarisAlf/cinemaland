import Celebrities from './Celebrities';

export default function Side({datas}) {
    return (
        <div className="col-md-4">
            <div className="sidebar">
                <Celebrities datas={datas}/>
            </div>
        </div>
    );
}
