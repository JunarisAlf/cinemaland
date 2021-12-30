import Link from 'next/link'

export default function Navigation() {
    return (
        <nav className="navbar navbar-default navbar-custom">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header logo">
                <div
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                >
                    <span className="sr-only">Toggle navigation</span>
                    <div id="nav-icon1">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <a >
                        <span className="my-logo">HALLOCINEMA</span>
                    </a>
                </Link>
               
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div
                className="collapse navbar-collapse flex-parent"
                id="bs-example-navbar-collapse-1"
            >
                <ul className="nav navbar-nav flex-child-menu menu-right width-100">
                    <li>
                        <Link href="/all-movie">
                            <a >Movie</a>
                        </Link>
                        
                    </li>
                    <li>
                        <Link href="/all-person">
                            <a >Person</a>
                        </Link>
                        
                    </li>
                    <li>
                        <Link href="/blogs">
                            <a >Blog</a>
                        </Link>
                        
                    </li>
                    <li>
                        <Link href="/profile">
                            <a >Profile</a>
                        </Link>
                        
                    </li>
                    <li className="btn signupLink">
                        <Link href="/" >
                            <a style={{ textDecoration: 'none' }}>Home</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
