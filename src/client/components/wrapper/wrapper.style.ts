import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ThemeTypes } from 'client/theme/theme';

export const WrapperStyled = styled.div(({ theme }: ThemeTypes) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.wrapperBg};
`);
