import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProfileInfo, profileInfo, reset } from '@slices/profile';

export function useProfile() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(reset());
        dispatch(getProfileInfo());
    }, []);

    const profile = useSelector(profileInfo);

    return {
        ...profile
    };
}
