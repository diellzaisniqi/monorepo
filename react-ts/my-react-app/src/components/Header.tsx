import React from 'react';

interface HeaderProps {
  currentStep: string;
}

const Header: React.FC<HeaderProps> = ({ currentStep }) => {
  return (
    <div >
      <div style={{ color: 'black', fontSize: '20px', marginBottom: '5px' }}>Current Step:</div>
      <div style={{ color: 'black', fontSize: '16px' }}>{currentStep}</div>
    </div>
  );
};

export default Header;
