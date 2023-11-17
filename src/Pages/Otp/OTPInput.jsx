import React, { useState } from 'react';
import './otp.module.css'

const OTPInput = ({ onComplete }) => {
  const [otp, setOTP] = useState(['', '', '', '', '']);

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (index < 4 && value !== '') {
        
        // Move focus to the next input field
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  return (
    <div className="otp-input-container">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          id={`otp-input-${index}`}
          value={value}
          onChange={(e) => handleInputChange(index, e)}
          maxLength="1"
        />
      ))}
    </div>
  );
};

export default OTPInput;
