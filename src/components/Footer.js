import React from "react";
import "../styles/Footer.css"; // Footer stil dosyasını ekleyin ve adınıza göre güncelleyin
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>EVENTHUB</h4>
            <ul>
              <li>
                <a href="#">Hakkımızda</a>
              </li>
              <li>
                <a href="#">Sıkça sorulan sorular</a>
              </li>
              <li>
                <a href="#">Kampanyalar</a>
              </li>
              <li>
                <a href="#">Hediye Kart</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>BİLGİLENDİRME</h4>
            <ul>
              <li>
                <a href="#">satış noktaları</a>
              </li>
              <li>
                <a href="#">satış sözleşmesi</a>
              </li>
              <li>
                <a href="#">gizlilik ve güvenlik</a>
              </li>
              <li>
                <a href="#">üyelik sözleşmesi</a>
              </li>
              <li>
                <a href="#">iletişim</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Bize ulaşın</h4>
            <ul>
              <li>
                <a href="#">Eventhub etkinlik</a>
              </li>
              <li>
                <a href="#"> +05214352000</a>
              </li>
              <li>
                <a href="#">EVENTHUB</a>
              </li>
              <li>
                <a href="#"> +05214352001</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Created by Enes Ekinci</h4>
            <div className="social-links">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/enes-ekinci-629672143/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
