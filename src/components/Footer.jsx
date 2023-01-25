import React from "react";
import "./footer.css";
import piggyvest from "../images/piggyvest.svg";
import { socials } from "../data";

const Footer = () => {
  return (
    <div className="footer-section">
      <ul className="piggyvest-section">
        <li>
          <img src={piggyvest} alt="piggyvest" style={{ width: 160 }} />
        </li>
        <li>
          <img
            src="https://www.piggyvest.com/_next/static/images/compliance-f24fa70ce98ff6f4dcdfddeefc2bdd5a.png"
            alt="NDPR"
            style={{ width: 160 }}
          />
        </li>
      </ul>
      <ul className="product-section">
        {/* <h5>Products</h5> */}
        <li>
          <h5>Piggybank</h5>
        </li>
        <li>
          <h5>Invest</h5>
        </li>
        <li>
          <h5>Safelock</h5>
        </li>
        <li>
          <h5>Targget Savings</h5>
        </li>
        <li>
          <h5>Flex Naira</h5>
        </li>
      </ul>
      <ul className="Legal-section">
        <li>
          <h5 style={{ fontWeight: "bold" }}>Legal</h5>
        </li>
        <li>
          <h5>Terms</h5>
        </li>
        <li>
          <h5>Privacy</h5>
        </li>
        <li>
          <h5>Security</h5>
        </li>
      </ul>
      <ul className="Legal-section">
        <li>
          <h5 style={{ fontWeight: "bold" }}>Company</h5>
        </li>
        <li>
          <h5>About</h5>
        </li>
        <li>
          <h5>FAQs</h5>
        </li>
        <li>
          <h5>Blogs</h5>
        </li>
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
        <li>
          <p>Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
          <p>contact@piggyvest.com </p>
          <p>+234 700 933 933 933</p>
        </li>
      </ul>
      <div className="footer-foot">
        <p>
          Piggyvest (formerly piggybank.ng) is the leading online saving {"&"} investing platform in Nigeria. For over 6 years, our
          customers have saved and invested billions of Naira that they would normally be tempted to spend.
        </p>
      </div>
    </div>
  );
};

export default Footer;
