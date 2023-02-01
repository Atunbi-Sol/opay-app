import React, { useState } from "react";
import piggyvest from "../images/piggyvest.svg";
import { FaBars } from "react-icons/fa";
import { links } from "../data";
import Signin from "./Signin";
import CreateAccount from "./CreateAccount";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={piggyvest} alt="piggyvest" style={{ width: 160 }} />
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>

        <div className={`${showLinks ? "links-container show-container" : "links-container"}`}>
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="sign-create">
          <Signin />
          <CreateAccount />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
