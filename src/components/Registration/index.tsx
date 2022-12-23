import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
`;

const InnerContainer = styled.div``;

const AuthTitle = styled.div`
  text-align: start;
  margin: 10px 0;

  font-family: 'Cera Pro', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #46a358;
`;

const AuthInput = styled.input`
  padding: 5px;

  font-family: 'Cera Pro', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #3d3d3d;

  border: 2px solid #3d3d3d;
  border-radius: 5px;

  &:focus {
    border-color: #46a358;
    outline: 0 none;
  }
`;

const AuthButton = styled.button`
  width: 100%;
  border: none;
  background: #46a358;
  border-radius: 6px;
  padding: 10px 20px;
  margin-top: 20px;

  font-family: 'Cera Pro';
  font-weight: 500;
  font-size: 16px;
  color: #fff;

  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #315c39;
  }
`;

const AuthButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const onClickCancel = () => navigate(-1);

  return (
    <AuthContainer>
      <InnerContainer>
        <AuthTitle>Логин</AuthTitle>
        <AuthInput />
        <AuthTitle>Пароль</AuthTitle>
        <AuthInput type="password" />
        <AuthTitle>Повторите пароль</AuthTitle>
        <AuthInput type="password" />
        <AuthButtonContainer>
          <AuthButton>Зарегистрироваться</AuthButton>
          <AuthButton onClick={onClickCancel}>Отмена</AuthButton>
        </AuthButtonContainer>
      </InnerContainer>
    </AuthContainer>
  );
};

export default Registration;
