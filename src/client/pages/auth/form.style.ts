import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

const mainRed = '#ff2f2f';
const mainText = '#1e1e1e';

export const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 50px;

  box-sizing: border-box;
  width: 400px;

  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.14);
  border-radius: 12px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 57px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #1e1e1e;
`;

export const WrapperInput = styled.div`
  position: relative;
  margin-bottom: 48px;
`;

export const TitleInput = styled.label`
  position: absolute;
  left: 0;
  top: -17px;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #999999;
  transition: all 0.2s;
`;

export const ValidInput = styled.label`
  position: absolute;
  left: 0;
  top: 32px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #ff2f2f;
  transition: all 0.3s;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 0;
  padding-bottom: 7px;
  border-bottom: 1px solid #3369f3;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;

  color: ${(props) => (props.typePass ? mainRed : mainText)};

  &:focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  margin-top: auto;
  padding: 12px;
  width: 100%;

  background: #3369f3;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 13px;

  color: #ffffff;
`;

export const Link = styled(RouterLink)`
  margin: 0 auto;
  margin-top: 14px;
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
  text-decoration: none;
  color: #3369f3;

  &:visited {
    color: #3369f3;
  }
`;

export const OAuthButton = styled.a`
    text-decoration: none;
    text-align: center;
    
    img {
        width: 45px;
        height: 45px;
        border-radius: 12px;
        cursor: pointer;
    }
`;
