import styled from '@emotion/styled';

export const BackwardStyled = styled.div(({ theme }) => `
    position: absolute;
    top: 64px;
    height: calc(100vh - 64px);
    cursor: pointer;
    width: 48px;
    padding: 0 18px;

    svg {
        position: absolute;
        top: calc(50% - 64px - 48px);
        width: 48px;
        height: 48px;
        fill: ${theme?.textPrimary};
    }
`);
