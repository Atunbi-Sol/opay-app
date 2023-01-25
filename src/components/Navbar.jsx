import React, { useState } from "react";
import piggyvest from "../images/piggyvest.svg";
import { FaBars } from "react-icons/fa";
import { links } from "../data";
import Signin from "./Signin";
import CreateAccount from "./CreateAccount";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  // const linksContainerRef = useRef(null);
  // const linksRef = useRef(null);

  // useEffect =
  //   (() => {
  //     const linksHeight = linksRef.current.getBoundingClientRect().height;
  //     console.log(linksContainerRef.current.getBoundingClientRect());
  //     if (showLinks) {
  //       linksContainerRef.current.style.height = `${linksHeight}px`;
  //     } else {
  //       linksContainerRef.current.style.height = "0px";
  //     }
  //   },
  //   [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={piggyvest} alt="piggyvest"  style={{width:160}}/>
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

        {/* <ul className="social-icons">
          {socials.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
              <a href={url}>{icon}</a>
              </li>
              );
            })}
          </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
