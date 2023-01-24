import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const AppleAndroid = () => {
  return (
    <div className="apple-android">
      <button className="apple-butt">
        <FaApple className="apple-android-icon apple-icon" /> <span> Get on iPhone </span>
      </button>
      <button className="android-butt">
        <FaGooglePlay className="apple-android-icon" /> <span> Get on Android </span>
      </button>
    </div>
  );
};

export default AppleAndroid;
