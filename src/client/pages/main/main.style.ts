import styled from '@emotion/styled';

import type { ThemeTypes } from 'client/theme/theme';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img {
        display: block;
        width: 560px;
        height: 360px;
        margin-bottom: 32px;
        border-radius: 16px;
    }
    
    h2 {
        margin-bottom: 48px;
        color: ${({ theme }: ThemeTypes) => theme?.textPrimary};
    }
`;
