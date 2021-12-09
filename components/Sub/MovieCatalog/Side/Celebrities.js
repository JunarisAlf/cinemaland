import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

export default function Celebrities({datas}) {
    const peoples = datas.results;
    return (
        <div  className="celebrities">
            <h4 className="sb-title">Spotlight Celebrities</h4>
            {peoples.map((people) => (
                <div key={people.id} className="celeb-item">
                    <Link href={'/people/' + people.id}>
                        <a >
                            <Image
                            src={people.profile_path == null ? '/images/uploads/ava2.jpg' :
                                'https://image.tmdb.org/t/p/original' +
                                people.profile_path
                            }
                                alt=""
                                width={70}
                                height={100}
                            />
                        </a>
                    </Link>
                    
                    <div className="celeb-author">
                        <h6>
                            <Link href={'/people/' + people.id}>
                                <a>{people.name}</a>
                            </Link>
                        </h6>
                        <span>ACTOR</span>
                    </div>
                </div>
            ))}

          
        </div>
    );
}
