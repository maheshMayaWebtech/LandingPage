import React, { useState } from 'react'
import '../LandingForm/index.css'

const Steps = ({handleOpen}) => {
    const [threeSteps, setThreeSteps] = useState({
        one: true,
        two: false,
        three: false,
      });
  return (
    <div className="sixthSection">
          <div className="fifthTop">
            <h1>Earn in Just</h1>
            <h3>Few Steps</h3>
          </div>
          <div className="sixthMain">
            <div className="sixthMainLeft">
              <div
                className="step1 step"
                onClick={() =>
                  setThreeSteps((prev) => ({
                    ...prev,
                    one: !threeSteps.one,
                    two: false,
                    three: false,
                  }))
                }
              >
                {threeSteps.one ? (
                  <div className="step1open stepopen">
                    <h1>
                      <span>Step 1 </span> Click on Register
                    </h1>
                    <div>
                      One should register themselves with an Aadhar card and
                      other supporting documents to provide AEPS services in any
                      area.
                    </div>
                  </div>
                ) : (
                  <div className="step1closed stepclosed">
                    <h1>
                      <span>Step 1 </span> Click on Register
                    </h1>
                  </div>
                )}
              </div>
              <div
                className="step2 step"
                onClick={() =>
                  setThreeSteps((prev) => ({
                    ...prev,
                    two: !threeSteps.two,
                    one: false,
                    three: false,
                  }))
                }
              >
                {threeSteps.two ? (
                  <div className="step2open stepopen">
                    <h1>
                      <span>Step 2 </span> Verify Biometrics
                    </h1>
                    <div>
                      The next step is to verify the biometrics that are
                      connected with the Aadhar Card because they will also need
                      to be registered at the govt Aeps portal.
                    </div>
                  </div>
                ) : (
                  <div className="step2closed stepclosed">
                    <h1>
                      <span>Step 2 </span> Verify Biometrics
                    </h1>
                  </div>
                )}
              </div>
              <div
                className="step3 step"
                onClick={() =>
                  setThreeSteps((prev) => ({
                    ...prev,
                    three: !threeSteps.three,
                    one: false,
                    two: false,
                  }))
                }
              >
                {threeSteps.three ? (
                  <div className="step3open stepopen">
                    <h1>
                      <span>Step 3 </span> Verification
                    </h1>
                    <div>
                      In this step, the verification for Aadhar payments bank is
                      done and if one can be verified by the Aeps service system
                      then they can easily earn extra income even at home.
                    </div>
                  </div>
                ) : (
                  <div className="step3closed stepclosed">
                    <h1>
                      <span>Step 3 </span> Verification
                    </h1>
                  </div>
                )}
              </div>
            </div>
            <div className="sixthMainRight">
              <img src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299107/MayaWebTech/ygexfjzv5mthqinywkxb.png" />
            </div>
          </div>
          <div className="sixthBtn">
            <button className="joinBtn" onClick={handleOpen}>
              Book Demo
            </button>
          </div>
        </div>
  )
}

export default Steps