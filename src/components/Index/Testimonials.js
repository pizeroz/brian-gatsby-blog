import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import client1 from '../../assets/images/testimonials/client1.jpg'
import client2 from '../../assets/images/testimonials/client2.jpg'
import client3 from '../../assets/images/testimonials/client3.jpg'
import client4 from '../../assets/images/testimonials/client4.jpg'
import shape from '../../assets/images/shape/shape1.svg'
import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 2,
        }
    }
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="testimonials-area pt-100 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="testimonial" />
                        Phản hồi
                    </span>
                    <h2>Phản hồi của khách hàng</h2>
                    <p>Khách hàng đánh giá cao chất lượng sản phẩm và dịch vụ của ITsite.</p>
                </div>

                {display ? <OwlCarousel
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="single-testimonials-item">
                        <p>
                            Là khách hàng của ITsite, chúng tôi thực sự hài lòng về các bạn. Sử dụng dịch vụ web của ITsite chúng tôi được hỗ trợ rất tốt và càng ngày càng tiếp cận được nhiều khách hàng hơn.
                        </p>

                        <div className="client-info">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={client1} alt="testimonial" />
                                <div className="title">
                                    <h3>Lê Thành Vinh</h3>
                                    <span>Stech Saigon</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <p>
                            Tư vấn viên cũng như đội ngũ Chăm sóc khách hàng của ITsite rất nhiệt tình giải đáp các thắc mắc của khách hàng và hỗ trợ ngay cả khi website đã hoàn thiện. Giao diện thân thiện và dễ sử dụng.
                        </p>

                        <div className="client-info">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={client2} alt="testimonial" />
                                <div className="title">
                                    <h3>Tạ Quang Đạt</h3>
                                    <span>MTF Vietnam</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <p>
                            Là khách hàng đang sử dụng dịch vụ của ITsite, tôi hoàn toàn yên tâm và tin tưởng đội ngũ kỹ thuật, chăm sóc khách hàng luôn hỗ trợ khách hàng nhiệt tình. Chúc cho ITsite phát triển thành công hơn nữa trong thời gian tới.
                        </p>
                        <div className="client-info">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={client3} alt="testimonial" />
                                <div className="title">
                                    <h3>Hà Thu</h3>
                                    <span>Himawari Group</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-testimonials-item">
                        <p>
                            Tôi ấn tượng với dịch vụ chuyên nghiệp của ITsite, thời gian bàn giao đúng như cam kết cùng với chất lượng website đúng yêu cầu. Khách hàng của tôi rất thích giao diện trên di động.
                        </p>
                        <div className="client-info">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={client4} alt="testimonial" />
                                <div className="title">
                                    <h3>Huệ Lee</h3>
                                    <span>Laksmira Diosamore</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}

                <div className="testimonials-view-btn text-center">
                    <Link to="/phan-hoi" className="default-btn">
                        <i className="flaticon-view"></i>
                        Xem thêm <span></span>
                    </Link>
                </div>
            </div>

            <div className="shape-img1">
                <img src={shape} alt="testimonial" />
            </div>
        </div>
    )
}

export default Testimonials;
