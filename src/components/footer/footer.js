import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "./socialMedia";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="dices text-center">
          <Col>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              fill="currentColor"
              className="bi bi-dice-1"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="1.5" />
              <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z" />
            </svg>
          </Col>
          <Col>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              fill="currentColor"
              className="bi bi-dice-2"
              viewBox="0 0 16 16"
            >
              <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z" />
              <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </Col>
          <Col>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              fill="currentColor"
              className="bi bi-dice-4"
              viewBox="0 0 16 16"
            >
              <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z" />
              <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </Col>
          <Col>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              fill="currentColor"
              className="bi bi-dice-5"
              viewBox="0 0 16 16"
            >
              <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z" />
              <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </Col>
          <Col className="d-none d-sm-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              fill="currentColor"
              className="bi bi-dice-6"
              viewBox="0 0 16 16"
            >
              <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z" />
              <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </Col>
        </Row>

        <Row className="justify-content-end top-content h5 text-right">
          پرمخاطب‌ترین فروشگاه برنامه‌های موبایل اندروید، بازی
        </Row>
        <Row>
          <p className="text-right">
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
            <div className="footer-copyright">
              تمامی حقوق این سایت برای سرزمین دانلود محفوظ است © 2021
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
