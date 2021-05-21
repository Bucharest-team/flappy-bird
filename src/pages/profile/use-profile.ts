import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProfileInfo, profileInfo } from '@slices/profile';

export function useProfile() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getProfileInfo());
    }, [dispatch]);

    const profile = useSelector(profileInfo);

    return {
        ...profile
    };
}
