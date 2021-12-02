import React from 'react';

export default function Celebrities() {
    const data = [1, 2, 3, 4, 5];
    return (
        <div className="celebrities">
            <h4 className="sb-title">Spotlight Celebrities</h4>
            {data.map((i) => (
                <div key={i} className="celeb-item">
                    <a href="#">
                        <img
                            src="images/uploads/ava1.jpg"
                            alt=""
                            width="70"
                            height="70"
                        />
                    </a>
                    <div className="celeb-author">
                        <h6>
                            <a href="#">Samuel N. Jack</a>
                        </h6>
                        <span>Actor</span>
                    </div>
                </div>
            ))}

            <a href="#" className="btn">
                See all celebrities
                <i className="ion-ios-arrow-right"></i>
            </a>
        </div>
    );
}
