import PeoleSearchItem from '../Sub/Search/PeopleSearchItem';

export default function PeopleSearchResult() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    return (
        <div className="page-single">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="flex-wrap-movielist mv-grid-fw my-flex-start">
                            {data.map((i) => (
                                <PeoleSearchItem key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
