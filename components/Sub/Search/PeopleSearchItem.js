import Image from 'next/image';
import Link from 'next/link'


export default function PeopleSearchItem({ people }) {
    return (
        <div className="col-xs-5 col-sm-6 col-md-6">
            <div className="ceb-item-style-2">
                <Image
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
                        <Link href={"people/" + people.id} style={{ textDecoration: 'none' }}>
                            <a >{people.name}</a>
                        </Link>
                        
                    </h2>
                    <span>{people.known_for_department}</span>
                    <p></p>
                </div>
            </div>
        </div>
    );
}
