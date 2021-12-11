import PeoleSearchItem from '../Sub/Search/PeopleSearchItem';

export default function PeopleSearchResult({result}) {
    const data = result.results;
    return (
        <div className="page-single">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="flex-wrap-movielist mv-grid-fw my-flex-start" style={{justifyContent: 'center !important'}}>
                            {data.map((people) => (
                                <PeoleSearchItem key={people.id} people={people}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
