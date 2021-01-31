import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'

const Pricing = () => {
    return (
        <div className="membership-levels-area pb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="priceing" />
                        Bảng giá
                    </span>
                    <h2>Bảng giá Website</h2>
                    <p>Lựa chọn gói thiết kế phù hợp với nhu cầu của bạn và liên hệ ngay với IT Site.</p>
                </div>

                <div className="membership-levels-table table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>
                                    <span className="title">Tính năng</span>
                                </th>
                                <th>
                                    <span className="price">8.900.000đ</span>
                                    <span className="title">Cơ bản</span>
                                </th>
                                <th>
                                    <span className="price">11.900.000đ</span>
                                    <span className="title">Nâng cao</span>
                                </th>
                                <th>
                                    <span className="price">14.900.000đ</span>
                                    <span className="title">Chuyên nghiệp</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Dung lượng</td>
                                <td>5G</td>
                                <td>10G</td>
                                <td>10G</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Giao diện tương thích với mọi thiết bị
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Cài đặt SSL bảo mật cho Website
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Website chuẩn SEO
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Website hỗ trợ đa ngôn ngữ
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Băng thông không giới hạn
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Tối ưu tốc độ tải trang
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        1 GB Dung lượng lưu trữ
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Không giới hạn tên miền
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Logo chữ đơn giản (Miễn phí)
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Hỗ trợ 24x7
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Bảo mật và sao lưu website
                                    </Link>
                                </td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Tích hợp bán hàng online (Ecommerce)
                                    </Link>
                                </td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Tích hợp các loại Chat, Call...
                                    </Link>
                                </td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        Phân tích và báo cáo tổng hợp
                                    </Link>
                                </td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <Link to="/contact" className="select-btn">
                                        Đăng ký
                                    </Link>
                                </td>
                                <td>
                                    <Link to="/contact" className="select-btn">
                                        Đăng ký
                                    </Link>
                                </td>
                                <td>
                                    <Link to="/contact" className="select-btn">
                                        Đăng ký
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Pricing
