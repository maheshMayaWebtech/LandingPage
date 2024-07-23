import React from 'react'
import LeftAlignedCard from '../cards/LeftAlignedCard'
import '../LandingForm/index.css'

const Features = () => {
  return (
    <div className="thirdSeection">
        <div className="thirdTop">
          <img
            src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299105/MayaWebTech/tqujxw1cady6zbwwex1y.png"
            width={80}
            className="cashHand"
          />
          <h1>Amazing Features</h1>
          <h3>Best Aeps services for Aadhar-based payments</h3>
        </div>
        <div className="thirdMain">
          <div className="thirdLeft">
            <div className="sectionThreeImageOne">
              <LeftAlignedCard
                logo={
                  "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299108/MayaWebTech/eza6h0xnucooc1q7t1cz.png"
                }
                heading={"Trust and Reliability"}
                subHeading={
                  "We have years of experience and truthfulness for our Aadhar-enabled payment system."
                }
              />
            </div>
            <LeftAlignedCard
              logo={
                "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299104/MayaWebTech/t0xagyrvm9bpskgift2h.png"
              }
              heading={"Agent Onboarding"}
              subHeading={
                "We have agents available to make sure to complete the KYC process on Aeps registration."
              }
            />
          </div>
          <div className="thirdMid">
            <img
              src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299107/MayaWebTech/zaykbtqtgijc7wy7rjwg.png"
              width={400}
            />
          </div>
          <div className="thirdRight">
            <div className="sectionThreeImageOne">
              <LeftAlignedCard
                logo={
                  "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299106/MayaWebTech/hhjqepts6uug5pabzij4.png"
                }
                heading={"Secure Platform "}
                subHeading={
                  "We have a secure platform to allow safe and secured AEPS services to start even at home. "
                }
              />
            </div>
            <LeftAlignedCard
              logo={
                "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299104/MayaWebTech/ywh81k6a2duqcvxadal2.png"
              }
              heading={"Proven Technology"}
              subHeading={
                "We use the govt Aeps portal to make sure all transactions are going right."
              }
            />
          </div>
        </div>
        <div className="thirdMainMobile">
          <img
            src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299107/MayaWebTech/zaykbtqtgijc7wy7rjwg.png"
            width={320}
          />
          <div className="thirdMobileImageTop">
            <div className="sectionThreeImageOne">
              <LeftAlignedCard
                logo={
                  "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299108/MayaWebTech/eza6h0xnucooc1q7t1cz.png"
                }
                heading={"Trust and Reliability"}
                subHeading={
                  "We have years of experience and truthfulness for our Aadhar-enabled payment system."
                }
                width={`150px`}
              />
            </div>
            <LeftAlignedCard
              logo={
                "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299104/MayaWebTech/t0xagyrvm9bpskgift2h.png"
              }
              heading={"Agent Onboarding"}
              subHeading={
                "We have agents available to make sure to complete the KYC process on Aeps registration."
              }
              width={`150px`}
            />
          </div>
          <div className="thirdMobileImageTop thirdMobileImageBottom">
            <div className="sectionThreeImageOne">
              <LeftAlignedCard
                logo={
                  "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299106/MayaWebTech/hhjqepts6uug5pabzij4.png"
                }
                heading={"Secure Platform "}
                subHeading={
                  "We have a secure platform to allow safe and secured AEPS services to start even at home. "
                }
                width={`150px`}
              />
            </div>
            <LeftAlignedCard
              logo={
                "https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299104/MayaWebTech/ywh81k6a2duqcvxadal2.png"
              }
              heading={"Proven Technology"}
              subHeading={
                "We use the govt Aeps portal to make sure all transactions are going right."
              }
              width={`150px`}
            />
          </div>
        </div>
      </div>
  )
}

export default Features