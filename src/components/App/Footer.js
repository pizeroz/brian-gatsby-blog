import React from 'react'
import {Link} from 'gatsby'
import logo from "../../assets/images/logo.png"
import footerMap from "../../assets/images/footer-map.png"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <img src={logo} alt="logo" />
                            </a>
                            <p>Thiết kế website chuẩn SEO uy tín, chất lượng. Chia sẻ kiến thức phát triển & tối ưu website.</p>

                            <ul className="social-link">
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-instagram'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="d-block" target="_blank" rel="noreferrer">
                                        <i className='bx bxl-linkedin'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Giới thiệu</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/">
                                        Trang chủ
                                    </Link>
                                </li>
                                    <li>
                                    <Link to="/gioi-thieu">
                                        Giới thiệu
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/lien-he">
                                        Liên hệ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Liên kết</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/bang-gia">
                                        Bảng giá
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/giao-dien">
                                        Kho giao diện
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/phan-hoi">
                                        Phản hồi
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faq">
                                        Câu hỏi thường gặp
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Liên hệ</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i>
                                    Toà nhà Peakview, 36 Hoàng Cầu, Đống Đa, <br /> Hà Nội
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+84986801501">+84 986 801 801</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:hotro.itsite@gmail.com">hotro.itsite@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright @{currentYear} <strong><a target="_blank" href="https://itsite.me/" rel="noreferrer">ITsite</a></strong> All rights reserved.</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <img src={footerMap} alt="footer-logo" />
            </div>
        </footer>
    );
}

export default Footer;
