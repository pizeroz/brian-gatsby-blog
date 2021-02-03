import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import project1 from '../../assets/images/projects/project1.jpg'
import project2 from '../../assets/images/projects/project2.jpg'
import project3 from '../../assets/images/projects/project3.jpg'
import project4 from '../../assets/images/projects/project4.jpg'
import project5 from '../../assets/images/projects/project5.jpg'
import project6 from '../../assets/images/projects/project6.jpg'

const RecentProjects = () => {
    return (
        <section className="projects-area bg-color pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="project" /> Dự án
                    </span>
                    <h2>Dự án nổi bật</h2>
                    <p>Khách hàng đánh giá cao chất lượng sản phẩm và dịch vụ của ITsite.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project1} alt="project" />

                                <Link className="link-btn" to="http://himawarigroup.com.vn">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="http://himawarigroup.com.vn">
                                        Himawari Group
                                    </Link>
                                </h3>
                                <span>Tư vấn du học</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project2} alt="project" />

                                <Link className="link-btn" to="http://stechsaigon.com">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="http://stechsaigon.com">
                                        Stech Saigon
                                    </Link>
                                </h3>
                                <span>Thiết bị y tế</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project3} alt="project" />

                                <Link className="link-btn" to="https://xaydungmtfvietnam.com">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="https://xaydungmtfvietnam.com">
                                        MTF Vietnam
                                    </Link>
                                </h3>
                                <span>Tư vấn thiết kế & xây dựng</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project4} alt="project" />

                                <Link className="link-btn" to="https://laksmiravn.com">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="https://laksmiravn.com">
                                        Laksmira Diosamore
                                    </Link>
                                </h3>
                                <span>Thương mại điện tử</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box ">
                            <div className="image">
                                <img src={project5} alt="project" />

                                <Link className="link-btn" to="https://laodongnhatban.com.vn">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="https://laodongnhatban.com.vn">
                                        Lao động Nhật Bản
                                    </Link>
                                </h3>
                                <span>Tư vấn xuất khẩu lao động</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src={project6} alt="project" />

                                <Link className="link-btn" to="https://hrc.com.vn">
                                    <i className='bx bx-plus'></i>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="https://hrc.com.vn">
                                        HRC Vietnam
                                    </Link>
                                </h3>
                                <span>Tuyển dụng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentProjects;
