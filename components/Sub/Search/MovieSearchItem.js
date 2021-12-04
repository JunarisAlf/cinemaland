export default function MovieSearchItem() {
    return (
        <div className="movie-item-style-2 movie-item-style-1 my-movie-item-style-1 ">
            <img src="/images/uploads/mv1.jpg" alt="" />
            <div className="hvr-inner my-hvr-inner">
                <a href="moviesingle.html">
                    {' '}
                    Read more <i className="ion-android-arrow-dropright"></i>{' '}
                </a>
            </div>
            <div className="mv-item-infor">
                <h6>
                    <a href="#">oblivion</a>
                </h6>
                <p className="rate">
                    <i className="ion-android-star"></i>
                    <span>8.1</span> /10
                </p>
            </div>
        </div>
    );
}
