import styled from '@emotion/styled';
import { Input as MuiInput, TextField, Typography } from '@material-ui/core';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - 64px);
  margin-top: -32px;
`;

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

export const Title = styled(Typography)`
    margin-bottom: 48px;
`;
