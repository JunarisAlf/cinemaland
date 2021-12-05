import SocialLink from '../Sub/Slider/SocialLink';
import MultiItemSlider from '../Sub/Slider/MultiItemSlider';

export default function Slider({ datas }) {
    return (
        <div className="slider movie-items">
            <div className="container">
                <div className="row">
                    <SocialLink />
                    <MultiItemSlider datas={datas} />
                </div>
            </div>
        </div>
    );
}
