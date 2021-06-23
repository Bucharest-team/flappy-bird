import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getLeaderboard, leaderboardInfo } from '@slices/leaderboard';

export function useLeaderboard() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getLeaderboard());
    }, [dispatch]);

    const leaderboard = useSelector(leaderboardInfo);

    return {
        ...leaderboard
    };
}
