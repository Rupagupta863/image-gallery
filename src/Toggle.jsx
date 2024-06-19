import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className='toggle-button'>
        <div className={`toggle-option ${isOn ? 'active' : ''}`} onClick={handleToggle}>
        JQuery
        </div>
        <div className={`toggle-option ${isOn ? 'active' : ''}`} onClick={handleToggle}>
            Javascript
        </div>
    </div>
  );
}

export default Toggle;