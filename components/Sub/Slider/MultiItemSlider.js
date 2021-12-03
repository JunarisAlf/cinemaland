import MovieItems from './MovieItems';

export default function MultiItemSlider() {
    const data = [
        { dummy: 1 },
        { dummy: 2 },
        { dummy: 3 },
        { dummy: 4 },
        { dummy: 5 },
        { dummy: 6 },
        { dummy: 7 },
        { dummy: 8 },
    ];
    return (
        <div className="slick-multiItemSlider">
            {data.map((item) => (
                <MovieItems key={item.dummy} />
            ))}
        </div>
    );
}
