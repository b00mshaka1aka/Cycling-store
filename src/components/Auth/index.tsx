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
  border: none;
  background: #46a358;
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

const AuthText = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #808080;
  margin: 5px 0;
`;

const AuthTextLink = styled.span`
  color: #808080;

  &:hover {
    cursor: pointer;
    color: #3d3d3d;
  }
`;

const AuthButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
`;

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const onClickCancel = () => navigate(-1);

  return (
    <AuthContainer>
      <InnerContainer>
        <AuthTitle>Логин</AuthTitle>
        <AuthInput />
        <AuthTitle>Пароль</AuthTitle>
        <AuthInput type="password" />
        <AuthText>
          Нет аккаунта?{' '}
          <Link to="/registration" className={AuthTextLink}>
            Регистрация
          </Link>
        </AuthText>
        <AuthButtonContainer>
          <AuthButton>Войти</AuthButton>
          <AuthButton onClick={onClickCancel}>Отмена</AuthButton>
        </AuthButtonContainer>
      </InnerContainer>
    </AuthContainer>
  );
};

export default Auth;
