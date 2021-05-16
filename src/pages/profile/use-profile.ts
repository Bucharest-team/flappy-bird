import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { profileInfo } from '@selectors/profile';
import { getProfileInfo } from '@slices/profile';

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
