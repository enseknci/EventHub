// Footer.js

import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h3>EVENTHUB</h3>
          <p>BİZE ULASIN</p>
          <p>BİLGİLENDİRME</p>
        </div>
        <div className="footer-contact">
          <h3>İLETİŞİM</h3>
          <p>BİZE ULASIN</p>
          <p>EVENTHUB ETKİNLİK</p>
          <p>0530 522 22 22</p>
          <p>eventhub@example.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 EventHub – Tüm hakları saklıdır</p>
      </div>
    </footer>
  );
};

export default Footer;
