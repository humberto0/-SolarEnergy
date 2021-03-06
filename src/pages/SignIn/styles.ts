import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import sol from '../../assets/28.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  max-width: 700px;
  align-items: center;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  img {
    height: 60px;
  }
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    color: #f4ede8;
    margin-bottom: 24px;
  }
  p {
    color: #f4ede8;
    display: block;
    margin-top: 5px;
    display: flex;
    align-items: center;
  }
  > a {
    color: #ff9000;
    display: block;
    margin-top: 10px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${sol}) no-repeat center;
  background-size: cover;
`;
