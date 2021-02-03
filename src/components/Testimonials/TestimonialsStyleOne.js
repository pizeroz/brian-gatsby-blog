import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import client1 from '../../assets/images/testimonials/client1.jpg'
import client2 from '../../assets/images/testimonials/client2.jpg'
import client3 from '../../assets/images/testimonials/client3.jpg'
import client4 from '../../assets/images/testimonials/client4.jpg'

const TestimonialsStyleOne = () => {
    return (
        <div className="testimonials-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="about" />
                        Phản hồi
                    </span>
                    <h2>Phản hồi của khách hàng</h2>
                    <p>Khách hàng đánh giá cao chất lượng sản phẩm và dịch vụ của ITsite.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-testimonials-item">
                            <p>Là khách hàng của ITsite, chúng tôi thực sự hài lòng về các bạn. Sử dụng dịch vụ web của ITsite chúng tôi được hỗ trợ rất tốt và càng ngày càng tiếp cận được nhiều khách hàng hơn.</p>
                            <div className="client-info">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={client1} alt="about" />
                                    <div className="title">
                                        <h3>Lê Thành Vinh</h3>
                                        <span>Stech Saigon</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-testimonials-item">
                            <p>Tư vấn viên cũng như đội ngũ Chăm sóc khách hàng của ITsite rất nhiệt tình giải đáp các thắc mắc của khách hàng và hỗ trợ ngay cả khi website đã hoàn thiện. Giao diện thân thiện và dễ sử dụng.</p>
                            <div className="client-info">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={client2} alt="about" />
                                    <div className="title">
                                        <h3>Tạ Quang Đạt</h3>
                                        <span>MTF Vietnam</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-testimonials-item">
                            <p>Là khách hàng đang sử dụng dịch vụ của ITsite, tôi hoàn toàn yên tâm và tin tưởng đội ngũ kỹ thuật, chăm sóc khách hàng luôn hỗ trợ khách hàng nhiệt tình. Chúc cho ITsite phát triển thành công hơn nữa trong thời gian tới.</p>
                            <div className="client-info">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={client3} alt="about" />
                                    <div className="title">
                                        <h3>Hà Thu</h3>
                                        <span>Himawari Group</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="single-testimonials-item">
                            <p>Tôi ấn tượng với dịch vụ chuyên nghiệp của ITsite, thời gian bàn giao đúng như cam kết cùng với chất lượng website đúng yêu cầu. Khách hàng của tôi rất thích giao diện trên di động.</p>
                            <div className="client-info">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={client4} alt="about" />
                                    <div className="title">
                                        <h3>Huệ Lee</h3>
                                        <span>Laksmira Diosamore</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsStyleOne
