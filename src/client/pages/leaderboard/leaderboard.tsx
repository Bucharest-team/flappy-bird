import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Main } from './leaderboard.styles';

const mock = [
    {
        name: 'Vladilen',
        score: '25'
    },
    {
        name: 'Vladilen 2',
        score: '26'
    },
    {
        name: 'Vladilen 3',
        score: '27'
    }
];

export const Leaderboard = () => {
    return (
        <Main>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell width="60">№</TableCell>
                        <TableCell >Имя</TableCell>
                        <TableCell width="200">Количество очков</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mock.map((el, id) => (
                        <TableRow key={el.name}>
                            <TableCell>{id + 1}</TableCell>
                            <TableCell>{el.name}</TableCell>
                            <TableCell>{el.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Main>
    );
};
