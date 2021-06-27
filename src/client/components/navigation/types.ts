export type Props = {
    isLoggedIn?: boolean;
};

export type DrawerProps = {
    isLoggedIn?: boolean;
    toggleMenu: boolean;
    toggleDrawer: () => void;
};
