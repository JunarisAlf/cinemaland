import Celebrities from './Celebrities';

export default function Side() {
    return (
        <div className="col-md-4">
            <div className="sidebar">
                <div className="ads">
                    <img
                        src="images/uploads/ads1.png"
                        alt=""
                        width="336"
                        height="296"
                    />
                </div>
                <Celebrities />
            </div>
        </div>
    );
}
