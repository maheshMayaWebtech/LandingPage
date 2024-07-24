import React from "react";

const Footer = ({ handleOpen }) => {
  return (
    <div className="tenthSection">
      <img
        src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299107/MayaWebTech/bhkbxdy5klio4ndrohna.png"
        className="moneyMan"
      />
      <div className="bottomPart">
        <div className="bottomMid">
          <h1>Secure and Seamless Digital Transactions</h1>
          <h2>+91 9315969524</h2>
        </div>
        <div className="bottomRight">
          <a href="tel:+919315969524">
            <button>Lets Talk</button>
          </a>
        </div>
      </div>
      <div className="gstNum">
        <div> <strong> GSTIN: 09AADCW7150K1ZX</strong></div>
        <div><strong>CIN: U62090UP2023PTC194942</strong> </div>
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
