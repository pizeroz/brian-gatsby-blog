import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import StartProject from '../components/Common/StartProject'

const FAQ = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="FAQ"
                homePageText="Home"
                homePageUrl="/"
                activePageText="FAQ"
            />
            <div className="ptb-100">
                <div className="container">
                    <div className="faq-accordion">
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Q1. Sau khi tôi sử dụng dịch vụ thiết kế website, ITsite có hỗ trợ chạy quảng cáo Google Ads/Facebook Ads không?.
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Hiện tại, ITsite chưa có chính sách hỗ trợ chạy Google Ads/Facebook Ads cho các khách hàng sử dụng dịch vụ thiết kế website. Thay vào đó, chúng tôi sẽ giới thiệu một số đối tác chạy quảng cáo uy tín để khách hàng tham khảo và hợp tác trực tiếp. Ngoài ra, tất cả website của ITsite đều được tích hợp bộ công cụ SEO, cho phép khách hàng sử dụng dễ dàng và thuận tiện khi muốn SEO website của mình.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Q2. Tôi có thể tự cập nhật, thay đổi thông tin trên website của mình được không?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Nếu có khả năng sử dụng trang quản trị website, khách hàng hoàn toàn có thể tự cập nhật, thay đổi các thông tin cơ bản (màu chữ, menu, thông tin, bài viết, ảnh slider…) của website. Nếu khách hàng chưa có khả năng sử dụng trang quản trị website, ITsite sẽ training trực tiếp hoặc online cho khách hàng.
                                        Lưu ý: Khách hàng bị hạn chế các thao tác can thiệp sâu vào website (ví dụ như thay đổi bố cục trang web). Các vấn đề này đã được ITsite trao đổi kỹ với khách hàng khi lấy yêu cầu thiết kế website.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Q3. Quản lý website có khó không và có cần nhiều nhân sự không?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Quản lý webiste hoàn toàn không khó. ITsite sẽ chịu trách nhiệm training chi tiết và kỹ lưỡng (trực tiếp hoặc online) để khách hàng nhanh chóng làm quen với việc quản lý trang web của mình.
                                        Số lượng nhân sự quản lý website sẽ tùy thuộc vào nhu cầu sử dụng trang web của quý khách hàng. Đối với các website trung bình nhỏ, một nhân viên có kỹ năng tốt cũng đủ để quản lý trang web chạy ổn định. Đối với các website lớn, cần cập nhật/thay đổi nhiều thông tin liên tục, khách hàng có thể linh động phân quyền quản trị và bổ sung thêm nhân sự để quản lý trang web tốt hơn.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Q4. Dịch vụ thiết kế website của ITsite có ưu điểm vượt trội nào so với các nhà cung cấp khác?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        So với các nhà cung cấp khác, dịch vụ thiết kế Website của ITsite có các ưu điểm vượt trội sau:
                                        • Thiết kế website dựa trên yêu cầu và ý tưởng của khách hàng chứ không dựa trên giao diện sẵn có.
                                        • ITsite thừa hưởng thế mạnh của VinaHost – nhà cung cấp Server/Hosting với hơn 10 năm kinh nghiệm, do đó khách hàng sẽ được sử dụng Hosting SSD chất lượng cao và ổn định + Tên miền miễn phí; đồng thời luôn được hỗ trợ 24/7 bởi đội ngũ kỹ thuật chuyên nghiệp.
                                        • Website được tối ưu về thiết kế, tùy biến linh hoạt trên mọi thiết bị và trình duyệt.
                                        • Website được thiết kế thân thiện với bộ máy tìm kiếm, tích hợp các công cụ nhằm tối ưu SEO.
                                        • ITsite chịu trách nhiệm bàn giao toàn bộ mã nguồn cho khách hàng, training khách hàng quản trị website kỹ lưỡng, có chế độ bảo hành rõ ràng cho website và các dịch vụ đi kèm.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Q5. Công ty tôi mới thành lập, tài chính chưa nhiều thì dùng gói thiết kế website nào là phù hợp?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Hiện tại, ITsite có nhiều gói thiết kế web với các mức giá khác nhau, cho phép khách hàng tùy chọn theo mục đích sử dụng và khả năng tài chính. Đặc biệt, chúng tôi áp dụng chính sách miễn phí Hosting và Tên miền cho tất cả khách hàng thiết kế website (chi tiết ưu đãi tùy thuộc theo từng gói dịch vụ – tham khảo bảng giá). Một gói dịch vụ thiết kế website chuẩn SEO được miễn phí cả hosting và tên miền chắc chắn sẽ giải quyết nỗi lo về tài chính của bạn. Thay vì bỏ ra một khoản chi phí đắt đỏ hàng tháng (20-30tr/tháng) để thuê mặt bằng có vị trí đẹp cho công ty, bạn chỉ cần bỏ ra một số tiền rất phải chăng (8-10tr/3-5 năm) để xây dựng website đại diện cho bộ mặt của công ty. Chắc chắn với các công ty vừa và nhỏ, đây sẽ là giải pháp rất ưu việt và tiết kiệm.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Q6. Hãy liệt kê các chi phí cố định và duy trì khi tôi sử dụng dịch vụ website trọn gói?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Khi sử dụng dịch vụ Website trọn gói của ITsite, bạn sẽ chi trả khoản phí cố định năm đầu tiên và phí duy trì hoạt động của website trong các năm tiếp theo. Cụ thể:
                                        • Chi phí cố định năm đầu: là chi phí thiết kế trọn gói chỉ từ 5.900.000vnđ.
                                        • Chi phí duy trì các năm sau: từ các năm sau khách hàng chỉ phải đóng phí duy trì tên miền và hosting cho dịch vụ website của mình.
                                        + Đối với Miễn Phí Tên Miền .com: chi phí duy trì chỉ từ 280.000vnđ/năm đối với tên miền Việt Nam từ 460.000vnđ/năm
                                        + Đối với hosting: tùy theo dung lượng và các gói hỗ trợ kèm theo mà chi phí thuê hosting dao động từ 15.000vnđ/tháng – 550.000vnđ/tháng.
                                        Để được tư vấn và báo giá chi tiết, quý khách hàng vui lòng liên hệ ngay với ITsite nhé!
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <StartProject />
            <Footer />
        </Layout>
    );
}

export default FAQ
