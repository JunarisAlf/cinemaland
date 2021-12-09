import Link from 'next/link';

export default function SocialLink() {
    return (
        <div className="social-link">
            <p>Follow Me:</p>
            <Link href="https://facebook.com/profile.php?id=100012767145271" style={{ textDecoration: 'none' }}>
                <a>
                    <i className="ion-social-facebook"></i>
                </a>
            </Link>
            <Link href="htpps://twitter.com" style={{ textDecoration: 'none' }}>
                <a>
                    <i className="ion-social-twitter"></i>
                </a>
            </Link>
            <Link href="https://google.com" style={{ textDecoration: 'none' }}>
                <a>
                    <i className="ion-social-googleplus"></i>
                </a>
            </Link>
            <Link href="https://youtube.com" style={{ textDecoration: 'none' }}>
                <a>
                    <i className="ion-social-youtube"></i>
                </a>
            </Link>
        </div>
    );
}
