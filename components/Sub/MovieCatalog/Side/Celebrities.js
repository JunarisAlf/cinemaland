import React from 'react';

export default function Celebrities({datas}) {
    const peoples = datas.results;
    return (
        <div  className="celebrities">
            <h4 className="sb-title">Spotlight Celebrities</h4>
            {peoples.map((people) => (
                <div key={people.id} className="celeb-item">
                    <a href="#">
                        <img
                           src={
                            'https://image.tmdb.org/t/p/original' +
                            people.profile_path
                        }
                            alt=""
                            width={70}
                            height={70}
                        />
                    </a>
                    <div className="celeb-author">
                        <h6>
                            <a href="#">{people.name}</a>
                        </h6>
                        <span>ACTOR</span>
                    </div>
                </div>
            ))}

          
        </div>
    );
}
