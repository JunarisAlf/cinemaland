export default function MovieItem() {
    return (
        <div className="movie-item my-movie-item">
            <div className="mv-img">
                <img
                    src="images/uploads/mv-item1.jpg"
                    alt=""
                    width="185"
                    height="284"
                />
            </div>
            <div className="hvr-inner">
                <a href="moviesingle.html">
                    Read more
                    <i className=" ion-android-arrow-dropright "></i>
                </a>
            </div>
            <div className="title-in">
                <h6>
                    <a href="#">Interstellar</a>
                </h6>
                <p>
                    <i className=" ion-android-star "></i>
                    <span>7.4</span>
                    /10
                </p>
            </div>
        </div>
    );
}
