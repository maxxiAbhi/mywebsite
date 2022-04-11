import Link from "next/link";
function Navbar() {
    return (
        <>


            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Abhinandan Maity</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/ ">
                                    <a className="nav-link" aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a className="nav-link" href="#">About</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a className="nav-link" href="#">Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg stroke">
                        <a className="navbar-brand" href="index.html">
                            <span className="fa fa-laptop"></span> Abhinandan
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
                        </button>
                        <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link href="/ ">
                                        <a className="nav-link" aria-current="page">Home</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/about">
                                        <a className="nav-link" href="#">About</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/contact">
                                        <a className="nav-link" href="#">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;
