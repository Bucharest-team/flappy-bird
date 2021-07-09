import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button as MuiButton, CardContent as MuiCardContent } from '@material-ui/core';

import { ThemeTypes } from '../../../theme/theme';

export const Wrapper = styled.div(({ theme }: ThemeTypes) => css`
    position: relative;
    color: ${theme?.textPrimary};
    margin-bottom: 18px;
    
   .MuiCardHeader-root {
        padding-bottom: 4px;
    }
    
    &:hover {
        button {
            display: block;
        }
    }
`);

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CommentStyled = styled.div(({ theme }: ThemeTypes) => css`
    padding: 18px;
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
    height: 100px;
    color: ${theme?.textPrimary};
    background-color:${theme?.cardBg};
    border-radius: 8px;

    div {
        padding: 0;
    }
    
    > div:last-child {
        padding-top: 4px;
        padding-bottom: 0;
        
        p {
            color: ${theme?.textPrimary};
        }
    }
`);

export const CardContent = styled(MuiCardContent)`
    height: 65px;
    overflow: auto;
`;

export const Button = styled(MuiButton)(({ theme }: ThemeTypes) => css`
    position: absolute;
    right: 18px;
    bottom: 0;
    color: ${theme?.textPrimary};
    display: none;
`);
