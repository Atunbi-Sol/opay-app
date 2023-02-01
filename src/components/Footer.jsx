import React from "react";
import "./footer.css";
import piggyvest from "../images/piggyvest.svg";
import { socials } from "../data";
import { Zoom } from "react-awesome-reveal";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <div className="footer-section section">
        <Zoom>
          <div className="footer-center">
            <ul className="piggyvest-section">
              <li>
                <img src={piggyvest} alt="piggyvest" style={{ width: 160 }} />
              </li>
              <li>
                <img
                  src="https://www.piggyvest.com/_next/static/images/compliance-f24fa70ce98ff6f4dcdfddeefc2bdd5a.png"
                  alt="NDPR"
                  className="NDPR-image"
                />
              </li>
            </ul>
            <ul className="product-section">
              <li style={{ fontWeight: "bold" }}>Products</li>
              <li>Piggyvest</li>
              <li>Invest</li>
              <li>Safelock</li>
              <li>Targget Savings</li>
              <li>Flex Naira</li>
            </ul>
            <ul className="Legal-section">
              <li style={{ fontWeight: "bold" }}>Legal</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Security</li>
            </ul>
            <ul className="Company-section">
              <li style={{ fontWeight: "bold" }}>Company</li>
              <li>About</li>
              <li>FAQs</li>
              <li>Blogs</li>
            </ul>
            <ul className="icon-section">
              {socials.map((social) => {
                const { id, url, icon } = social;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })}
              <p>Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
              <p>contact@piggyvest.com </p>
              <p>+234 700 933 933 933</p>
            </ul>
          </div>
          <div className="footer-foot">
            <p>
              Piggyvest (formerly piggybank.ng) is the leading online saving {"&"} investing platform in Nigeria. For over 6 years, our
              customers have saved and invested billions of Naira that they would normally be tempted to spend.
            </p>

            <p style={{ color: "#083eab" }}>2016 - {today.getFullYear()} PiggyTech Global Limited - RC 1405222 </p>
          </div>
        </Zoom>
      </div>
    </>
  );
};

export default Footer;
