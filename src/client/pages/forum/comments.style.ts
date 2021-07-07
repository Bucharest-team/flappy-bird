import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ThemeTypes } from '../../theme/theme';

export const Wrapper = styled.div(({ theme }: ThemeTypes) => css`
    color: ${theme?.textPrimary};
`);

export const CommentStyled = styled.div(({ theme }: ThemeTypes) => css`
    padding: 24px;
    box-shadow: 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%), 0 2px 4px -1px rgb(0 0 0 / 30%);
    max-height: 82px;
    overflow: auto;
    color: ${theme?.textPrimary};
    background-color:${theme?.cardBg};

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
