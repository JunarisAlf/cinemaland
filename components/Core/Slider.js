import SocialLink from '../Sub/Slider/SocialLink';
import MultiItemSlider from '../Sub/Slider/MultiItemSlider';

export default function Slider() {
    return (
        <div className="slider movie-items">
            <div className="container">
                <div className="row">
                    <SocialLink />
                    <MultiItemSlider />
                </div>
            </div>
        </div>
    );
}
