import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCount } from '@selectors/counter'
import { dec, inc } from '@slices/counter'

import { TypographyH1, Wrapper } from './typography.styles'

export const Main = () => {
    const dispatch = useDispatch()

    const value = useSelector(getCount)

    const onInc = React.useCallback(() => {
        dispatch(inc())
    }, [dispatch])

    const onDec = React.useCallback(() => {
        dispatch(dec())
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
