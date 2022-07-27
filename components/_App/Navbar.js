import React from "react"
import Link from '@/utils/ActiveLink'
import * as Icon from 'react-feather'
import { useSelector } from 'react-redux'

const Navbar = () => {
    
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 120) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/">
                            <a className="navbar-brand">
                                <img src="/images/logo.png" alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link href="/" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/about-us" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">
                                            About Us
                                        </a>
                                    </Link> 
                                </li>
                                <li className="nav-item">
                                    <Link href="/#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Services <Icon.ChevronDown/>
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/website-development" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Website development</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/mobile-development" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Mobile development</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/blockchain-development" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blockchain Development</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/drippy-project" ctiveClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">
                                            Projects
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/contact" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;