import "./footer.styles.css";
import React from "react";

interface FooterProps {
  scrollTo: (hashName: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollTo }) => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <h3
          className="footer__title"
          onClick={() => scrollTo("header")}>
          Avatar Letter
        </h3>
        <div className="footer__grid">
          <a
            href="https://github.com/ytrkptl/avatar-letter-client"
            target="_blank"
            rel="noreferrer"
            className="footer__link">
            Client repository
          </a>
          <span
            className="footer__link"
            onClick={() => scrollTo("how-to-get-started")}>
            How to use this/How to Get Started?
          </span>
          <a
            href="https://yatrik.dev/"
            target="_blank"
            rel="noreferrer"
            className="footer__link">
            Yatrik's Portfolio
          </a>
          <a
            href="https://github.com/ytrkptl/avatar-letter"
            target="_blank"
            rel="noreferrer"
            className="footer__link">
            Server repository
          </a>
          <span
            className="footer__link"
            onClick={() => scrollTo("credits")}>
            Credits
          </span>
        </div>
        <div className="footer__author">
          <p>Created by: Yatrik Patel, November 24, 2020</p>
          <p>Last Updated on: December 2, 2020</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
