import * as React from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo.svg';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  user-select: none;
`;

const LogoTitle = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-size: 20px;
  font-weight: 900;
  color: #46a358;
  text-transform: uppercase;
  margin: 0 5px;
`;

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <img className="img-fluid" src={logo} alt="Logo" />
      <LogoTitle>greenshop</LogoTitle>
    </LogoContainer>
  );
};

export default Logo;
