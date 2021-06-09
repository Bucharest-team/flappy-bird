import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { List as MaterialList, Button as MaterialButton } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const thumbnailStyles = () => css`
    width: 160px;
    height: 160px;
    border-radius: 16px;
    margin-right: 48px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 64px;
    border-radius: 16px;
`;

export const AvatarWrapper = styled.div`
    position: relative;
`;

export const Thumbnail = styled.img`
    ${thumbnailStyles()};
`;

export const NoAvatar = styled(AccountBoxIcon)`
    ${thumbnailStyles()};

    margin-right: 24px;

    + svg {
        right: 41px;
        bottom: 18px;
        fill: #000;
    }
`;

export const CameraIconStyled = styled(PhotoCameraIcon)`
    position: absolute;
    right: 8px;
    bottom: 8px;
`;

export const List = styled(MaterialList)`
    margin: 16px 0;
`;

export const ListItemText = styled.li`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 16px;
    font-family: inherit;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Link = styled(RouterLink)`
    text-decoration: none;
    color: #3f51b5;
    font-size: 18px;
    line-height: 1;

    &:hover {
        text-decoration: underline;
    }
`;

export const Button = styled(MaterialButton)`
    text-transform: none;
    font-size: 18px;
    padding: 0;
    line-height: 1;

    &:hover {
        text-decoration: underline;
        background: none;
    }
`;
