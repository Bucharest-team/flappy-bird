import styled from '@emotion/styled';
import { Container, TableCell as MuiTableCell } from '@material-ui/core';
import type { ThemeTypes } from 'client/theme/theme';

export const Main = styled(Container)`
    margin-top: 32px;
`;

export const TableCell = styled(MuiTableCell)`
    color: ${({ theme }: ThemeTypes) => theme?.textPrimary};
`;
