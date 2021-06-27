import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TextField as MuiTextField, Button as MuiButton } from '@material-ui/core';
import type { ThemeTypes } from 'client/theme/theme';

export const TextField = styled(MuiTextField)(({ theme }: ThemeTypes) => css`    
    input {
        color: ${theme?.textPrimary};
    }

    label {
        color: ${theme?.inputLabel};
    }

    > div::before {
        border-bottom: 1px solid ${theme?.borderBottom};
    }
`);

export const Button = styled(MuiButton)(({ theme }: ThemeTypes) => css`
    background-color: ${theme?.mainBg};
`);
