import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Typography from '@material-ui/core/Typography';

export const Title = styled(Typography)(({ theme }) => {
    return css`
        flex-grow: 1;
        margin-left: 16px;
        user-select: none;
    `;
});
