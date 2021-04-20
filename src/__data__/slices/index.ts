import counter from './counter'

const reducers = {
    counter: counter.reducer
}

const actions = {
    ...counter.actions
}

export {
    reducers,
    actions
}
