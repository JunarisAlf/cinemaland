export default function PeopleSearchItem({ people }) {
    return (
        <div className="col-md-6">
            <div className="ceb-item-style-2">
                <img
                    src={
                        people.profile_path == null
                            ? '/images/uploads/ceblist1.jpg'
                            : 'https://image.tmdb.org/t/p/original' + people.profile_path
                    }
                    height={141}
                    width={103}
                    alt=""
                />
                <div className="ceb-infor">
                    <h2>
                        <a href={"people/" + people.id}>{people.name}</a>
                    </h2>
                    <span>{people.known_for_department}</span>
                    <p></p>
                </div>
            </div>
        </div>
    );
}
