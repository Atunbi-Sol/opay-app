import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import piggy from "./images/piggy.png";
import safelock from "./images/safelock.png";
import target from "./images/target.png";
import film from "./images/film.png";

export const links = [
  {
    id: 1,
    url: "/",
    text: "save",
  },
  {
    id: 2,
    url: "/invest",
    text: "invest",
  },
  {
    id: 3,
    url: "/stories",
    text: "stories",
  },
  {
    id: 4,
    url: "/faqs",
    text: "FAQs",
  },
  {
    id: 5,
    url: "/blog",
    text: "blog",
  },
  {
    id: 6,
    url: "/e-book",
    text: "e-book",
  },
];

export const socials = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
];

export const Cards = [
  {
    id: 1,
    icon: <img src={piggy} alt="secur" style={{ width: 50, height: 50 }} />,
    title: "Automated Savings",
    description: "Automated savings is a way to save money from a large investment.",
    button: <FaLongArrowAltRight className="button-icon one" />,
    buttonName: <span style={{ fontWeight: "bold", letterSpacing: 2 }}>{"Piggybank"}</span>,
  },
  {
    id: 2,
    icon: <img src={safelock} alt="secure icon" style={{ width: 50, height: 50 }} />,
    title: "Fixed Savings",
    description: "Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.",
    button: <FaLongArrowAltRight className="button-icon two" />,
    buttonName: <span style={{ fontWeight: "bold", letterSpacing: 2 }}>{"Safelock"}</span>,
  },
  {
    id: 3,
    icon: <img src={target} alt="secure icon" style={{ width: 50, height: 50 }} />,
    title: "Goal-Oriented Savings",
    description: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
    button: <FaLongArrowAltRight className="button-icon three" />,
    buttonName: <span style={{ fontWeight: "bold", letterSpacing: 2 }}>{"Target Savings"}</span>,
  },
  {
    id: 4,
    icon: <img src={film} alt="secure icon" style={{ width: 50, height: 50 }} />,
    title: "Flexible Savings",
    description: "Save, transfer, withdraw, manage and organise your money for free at any time.",
    button: <FaLongArrowAltRight className="button-icon four" />,
    buttonName: <span style={{ fontWeight: "bold", letterSpacing: 2 }}>{"Flex Naira"}</span>,
  },
];

export const testimonies = [
  {
    id: 1,
    date: "Thursday, 27th of October 2022 by 13:03 PM",
    name: "Racheal O.",
    testimony:
      "testimony: My name is Rachael Joseph and I am here to testify that Piggyvest has helped me a lot. I had to spread the good news to my friends and tell them about the app and behold they are also using it. Thank you so much Pggyvest for saving me cause I am the type of person that spends lavishly. Thank you once again Piggyvest 💙",
  },
  {
    id: 2,
    name: "Uchendu C",
    testimony: "Whenever money got into my hands, I never knew how I squandered it so fast without even saving a little. I got to hear about Piggy vest and it's various services and right now, I am totally enjoying this journey.",
  }
];
