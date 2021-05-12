import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "./socialMedia";
import FooterDices from "./footerDices";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <FooterDices />
        <Row className="justify-content-end footer-top-content h5 text-right">
          پرمخاطب‌ترین فروشگاه برنامه‌ و بازی موبایل اندروید
        </Row>
        <Row>
          <p className="text-right footer-top-content">
            صد‌ها هزار بازی ایرانی و خارجی دیتادار یا بدون دیتا را با ترافیک
            نیم‌بها دانلود کنید و به سادگی خرید درون‌ برنامه‌ای انجام دهید.کیوسک
            مجهز به سپر امنیت است که برنامه‌ها را توسط آنتی ویروس‌ها بررسی کرده
            و به محض شناسایی برنامه‌ی مخرب، به کاربر اعلام می‌کند که آن برنامه
            را از دستگاه خود پاک کند
          </p>
        </Row>
      </Container>
      <div className="text-right bg-white py-2 ">
        <Container>
          <Row className="justify-content-center justify-content-sm-between footer-bottom flex-column flex-sm-row">
            <SocialMedia />
            <div className="footer-copyright text-center">
              تمامی حقوق این سایت برای کیوسک دانلود محفوظ است © 2021
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
