import React from 'react'
import '../LandingForm/index.css'

const Aeps = ({handleOpen}) => {
  return (
    <div>
        <div className="secondSection">
        <div className="secondLeft">
          <img src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299106/MayaWebTech/egkhzftbazfifq6gmyfq.png" />
        </div>
        <div className="secondRight">
          <img
            src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721299107/MayaWebTech/cv2g6qivr1yi13mad0qu.png"
            width={80}
            className="thumbPrint"
          />
          <h1>AEPs Services Makes Me Happy</h1>
          <h2>(Aadhaar Enabled Payment System)</h2>
          <ul>
            <li>
              Provide ATM-like services to customers just from the use of Aadhar
              cards.
            </li>
            <li>
              Provide them to make cash withdrawals and deposits from the Aeps
              portal.
            </li>
            <li>
              Just do the Aeps registration to provide Adhar payment bank
              services.
            </li>
            <li>
              Earn commissions with Aeps Adhar enabled payment system for each
              transaction.
            </li>
          </ul>
          <button className="joinBtn" onClick={handleOpen}>
            Book Demo
          </button>
        </div>
      </div>
    </div>
  )
}

export default Aeps