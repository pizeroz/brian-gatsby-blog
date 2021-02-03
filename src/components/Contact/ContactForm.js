import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import contact from '../../assets/images/contact.png'
const config = require('../../../config')

const ContactForm = () => {
    return (
        <section className="contact-area pb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="contact" />
                        Liên hệ
                    </span>
                    <h2>Liên hệ ngay với ITsite</h2>
                    <p>Địa chỉ email của bạn được bảo vệ. Các trường yêu cầu được đánh dấu *</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="contact-image">
                            <img src={contact} alt="contact" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="contact-form">
                            <form id="contactForm" action={config.contactFormUrl} method="POST">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" required placeholder="Họ tên" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" required placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" className="form-control" required placeholder="Số điện thoại" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" cols="30" rows="6" required placeholder="Lời nhắn..." />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="default-btn">
                                            <i className="flaticon-tick"></i>
                                            Gửi ngay<span></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
