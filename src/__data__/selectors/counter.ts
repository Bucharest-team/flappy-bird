import { RootState } from '../store'

export const getCount = (state: RootState) => state.counter.value
