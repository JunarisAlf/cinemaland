export default function Hero({keyword}) {
    return (
        <div className="hero common-hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="hero-ct">
                            <h1>{'Result for "'+ keyword +'"'}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
