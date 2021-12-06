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
                <a href="index.html">
                    <img
                        className="logo"
                        src="/images/logo1.png"
                        alt=""
                        width="119"
                        height="58"
                    />
                </a>
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div
                className="collapse navbar-collapse flex-parent"
                id="bs-example-navbar-collapse-1"
            >
                <ul className="nav navbar-nav flex-child-menu menu-right width-100">
                    <li className="">
                        <a href="/search?movie=marvel">Search</a>
                    </li>
                    <li className="btn signupLink">
                        <a href="/">Home</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
