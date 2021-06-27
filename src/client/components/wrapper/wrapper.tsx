import React from 'react';

import { WrapperStyled } from './wrapper.style';

export const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <WrapperStyled>{children}</WrapperStyled>
);
