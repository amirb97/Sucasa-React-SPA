import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto p-4">
      <div className="container flex-row">
        <div className="contact">
          <h2>Contact:</h2>
          <p>sucasabarandgrill@gmail.com</p>
          <p>(805)369-2272</p>
        </div>
        <div className="socials">
          <h2>Connect:</h2>
          <p>Follow us on social media</p>
          <a href="https://www.facebook.com/sucasabarandgrill/" target="_blank" className="fa fa-facebook"></a>
          <a href="https://www.instagram.com/sucasabarandgrill/?hl=en" target="_blank" className="fa fa-instagram"></a>
        </div>
        <div className="hours">
          <h2>Hours:</h2>
          <ul>
            <li>Monday-Thursday: 4-9pm</li>
            <li>Friday-Satday: 11am-9:30pm</li>
            <li>Sunday: 10-9pm</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
