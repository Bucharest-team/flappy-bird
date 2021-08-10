import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';

import { BackwardStyled } from './backward.style';

export const Backward = ({ children }: { children: React.ReactNode }) => {
    const history = useHistory();

    const handleBack = React.useCallback(() => {
        history.goBack();
    }, [history]);

    return (
        <React.Fragment>
            <BackwardStyled onClick={handleBack}>
                <ArrowBackIosIcon />
            </BackwardStyled>
            {children}
        </React.Fragment>
    );
};
