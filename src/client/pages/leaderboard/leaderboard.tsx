import React from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    CircularProgress
} from '@material-ui/core';

import { useLeaderboard } from '@hooks/use-leaderboard';
import { Main, TableCell } from './leaderboard.styles';

export const Leaderboard = () => {
    const { isLoading, listLeader } = useLeaderboard();

    if (isLoading) {
        return (
            <Main>
                <CircularProgress size={64} />
            </Main>
        );
    }

    return (
        <Main maxWidth="md">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell width="60">№</TableCell>
                        <TableCell>Имя</TableCell>
                        <TableCell width="200">Количество очков</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listLeader.map((el, id) => (
                        <TableRow key={el.name}>
                            <TableCell>{id + 1}</TableCell>
                            <TableCell>{el.name}</TableCell>
                            <TableCell>{el['flappy-score']}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Main>
    );
};
