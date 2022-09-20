import * as React from 'react';
import styled from 'styled-components';

import search from '../../assets/images/search.svg';
import cart from '../../assets/images/cart.svg';
import logout from '../../assets/images/logout.svg';

const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceImage = styled.img`
  padding: 25px 5px;
  margin: 0 10px;
  cursor: pointer;
`;

const ServiceButton = styled.button`
  border: none;
  background-color: #46a358;
  border-radius: 6px;
  padding: 10px 20px;

  font-family: 'Cera Pro';
  font-weight: 500;
  font-size: 16px;
  color: #fff;

  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #315c39;
  }
`;

const ServiceButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceButtonImage = styled.img`
  margin: 0 4px;
`;

const HeaderService: React.FC = () => {
  return (
    <ServiceContainer>
      <ServiceImage src={search} alt="Search" />
      <ServiceImage src={cart} alt="Cart" />
      <ServiceButton>
        <ServiceButtonContainer>
          <ServiceButtonImage src={logout} alt="Logout" />
          Войти
        </ServiceButtonContainer>
      </ServiceButton>
    </ServiceContainer>
  );
};

export default HeaderService;
