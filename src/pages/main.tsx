import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { actions, selectors } from '../__data__'

import { TypographyH1, Wrapper } from './typography.styles'

export const Main = () => {
    const dispatch = useDispatch()

    const value = useSelector(selectors.getCount)

    const onInc = React.useCallback(() => {
        dispatch(actions.inc())
    }, [dispatch])

    const onDec = React.useCallback(() => {
        dispatch(actions.dec())
    }, [dispatch])

    return (
        <React.Fragment>
            <TypographyH1 color="tomato">{value}</TypographyH1>
            <Wrapper>
                <button onClick={onDec}>-1</button>
                <button onClick={onInc}>+1</button>
            </Wrapper>
        </React.Fragment>
    )
}
