import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.png"

const Navbar = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="tarn-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link
                                to="/"
                                onClick={() => setCollapsed(true)}
                                className="navbar-brand"
                            >
                                <img src={logo} alt="logo" />
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
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link
                                            to="/"
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            Trang chủ
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="/giao-dien"
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            Kho giao diện
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="/bang-gia"
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            Bảng giá
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            to="/blog"
                                            activeClassName="active"
                                            className="nav-link"
                                        >
                                            Blog <i className='bx bx-chevron-down'></i>

                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    to="/blog/back-end"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Backend
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/blog/front-end"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Frontend
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/blog/wordpress"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    Wordpress
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link
                                                    to="/blog/aws-services"
                                                    activeClassName="active"
                                                    onClick={() => setCollapsed(true)}
                                                    className="nav-link"
                                                >
                                                    AWS services
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <form className="search-box">
                                            <input type="text" className="input-search" placeholder="Tìm kiếm mẫu website" />
                                            <button type="submit">
                                                <i className="flaticon-loupe"></i>
                                            </button>
                                        </form>
                                    </div>

                                    <div className="option-item">
                                        <Link
                                            to="/lien-he"
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="default-btn"
                                        >
                                            <i className="flaticon-right"></i> Liên hệ <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
