import React from 'react'
const config = require('../../../config')

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>Địa chỉ</h3>
                            <p>{config.address}, {config.city}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>Hỗ trợ</h3>
                            <p>Mobile: <a href={"tel:" + config.phone}>{config.phoneDisplay}</a></p>
                            <p>E-mail: <a href={"mailto:" + config.email}>{config.email}</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <h3>Giờ làm việc</h3>
                            <p>Thứ 2 - Thứ 6: 09:00 - 20:00</p>
                            <p>Thứ 7 & Chủ nhật: 10:30 - 22:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
