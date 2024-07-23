import React from "react";

const Footer = ({handleOpen}) => {
  return (
    <div className="tenthSection">
      <img
        src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299107/MayaWebTech/bhkbxdy5klio4ndrohna.png"
        className="moneyMan"
      />
      <div className="bottomPart">
        <div className="bottomMid">
          <h1>Secure and Seamless Digital Transactions</h1>
          <h2>+91 8897789876</h2>
        </div>
        <div className="bottomRight">
          <button onClick={handleOpen}>Lets Talk</button>
        </div>
      </div>
      <div className="tenthBottom">
        Started as a team of two passionate young individuals and now we deliver
        amazing user experiences through technology to the people who trusted us
        around the globe.
      </div>
    </div>
  );
};

export default Footer;
