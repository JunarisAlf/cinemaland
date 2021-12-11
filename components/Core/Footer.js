import Image from 'next/image';
export default function Footer() {
    return (
        <footer>
            <div className="ft-copyright">
                <Image src="/tmdb.svg" width={150} height={50}/>
                <div className="ft-left">
                    <p>© 2021. All Rights Reserved. Made by JunarisAlf.</p>
                </div>

                <div className="backtotop">
                    <p>
                        <a href="#" id="back-to-top">
                            Back to top{' '}
                            <i className="ion-ios-arrow-thin-up"></i>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
