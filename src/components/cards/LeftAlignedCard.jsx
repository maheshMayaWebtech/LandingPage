import React from 'react';

const LeftAlignedCard = ({logo, heading, subHeading, width='250px'}) => {
  return (
    <div style={{width: width, boxShadow: '#00000036 0px 0px 13px -3px', padding: '10px', borderRadius: '10px', textAlign: 'center'}}>
        <div>
          <img src={logo} alt={logo} />
        </div>
        <h1 style={{fontSize: '20px', marginBottom: 0}}>{heading}</h1>
        <h3 style={{fontSize: '13px', fontWeight: 400}}>{subHeading}</h3>
    </div>
  )
}

export default LeftAlignedCard