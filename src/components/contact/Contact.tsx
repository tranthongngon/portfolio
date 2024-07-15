import React from "react";
import me2 from "../../assets/images/me_2.png";
import "./style.scss";
import fb from "../../assets/icons/facebook.svg";
import lk from "../../assets/icons/linkedIn.svg";
import mail from "../../assets/icons/mail.svg";
import git from "../../assets/icons/github.svg";
import phone from "../../assets/icons/phone.svg";

export default function Contact() {
  return (
    <div className="contact__wrap">
      <div className="container">
        <div className="contact__content">
          <div className="contact__text">
            <span className="contact__text-hello">👋 Contact me</span>
            <h4 className="contact__text-title">
              Tell me everything you{" "}
              <span style={{ color: "#FFDDBF" }}>need</span>
            </h4>
            <div className="contact__info">
              <h4 className="contact__info-title">My Information</h4>
              <address className="contact__info-add">
                61 Đường Số 1, Khu Phố 2, Quận 9, Hồ Chí Minh, Việt Nam
              </address>
              <time className="contact__info-time">
                Date of birth: 01/05/1998
              </time>
              <div className="contact__info-icon">
                <a
                  href="https://www.facebook.com/tranthongngon/"
                  target="_blank"
                  className="contact__info-icon--item"
                >
                  <img src={fb} alt="ngontt" />
                </a>
                <a
                  href="mailto:tranngon.work@gmail.com"
                  target="_blank"
                  className="contact__info-icon--item"
                >
                  <img src={mail} alt="ngontt" />
                </a>
                <a
                  href="tel:+84388711977"
                  target="_blank"
                  className="contact__info-icon--item"
                >
                  <img src={phone} alt="ngontt" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ngontt/"
                  target="_blank"
                  className="contact__info-icon--item"
                >
                  <img src={lk} alt="ngontt" />
                </a>
                <a
                  href="https://github.com/tranthongngon"
                  target="_blank"
                  className="contact__info-icon--item"
                >
                  <img src={git} alt="ngontt" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact__thumbnail">
            <img src={me2} alt="ngontt" />
          </div>
        </div>
      </div>
    </div>
  );
}
