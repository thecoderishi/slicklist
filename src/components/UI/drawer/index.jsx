import React, { useEffect } from "react";
import clsx from "clsx";
import {
    ListItemText,
    ListItemIcon,
    ListItem,
    IconButton,
    Divider,
    CssBaseline,
    List,
    Drawer,
} from "@mui/material";
import DrawerListItem from "../listItems";
import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import InboxIcon from '@mui/icons-material/Inbox';
import InventoryIcon from '@mui/icons-material/Inventory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import SettingsIcon from '@mui/icons-material/Settings';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/material/styles';

const StyledRoot = styled('div')(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    }
}))

const StyledDrawer = styled(Drawer)(({ open, theme }) => ({
    width: open ? 260 : 73,
    overflowX: open ? '' : 'hidden',
    transition: open ?
        theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
        :
        theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    '& .MuiDrawer-paper': {
        width: open ? 260 : 73,
        overflowX: open ? '' : 'hidden',
        transition: open ?
            theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            })
            :
            theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
    },
    flexShrink: 0,
    whiteSpace: "nowrap",
}));

const listItem = [
    {
        name: 'Dashboard',
        icon: <DashboardIcon color="primary" />
    },
    {
        name: 'Product',
        icon: <ProductionQuantityLimitsIcon color="primary" />
    },
    {
        name: 'Inventary',
        icon: <InboxIcon color="primary" />
    },
    {
        name: 'Order',
        icon: <InventoryIcon color="primary" />
    },
    {
        name: 'Suppliers',
        icon: <PrecisionManufacturingIcon color="primary" />
    },
    {
        name: 'Contact',
        icon: <PermPhoneMsgIcon color="primary" />
    },
    {
        name: 'Manage',
        icon: <SettingsIcon color="primary" />
    },
    {
        name: 'F&Q',
        icon: <LiveHelpIcon color="primary" />
    },
]

export default function NavCustomDrawer() {

    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedId] = React.useState(1);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const setSelectedIndex = (index) => {
        setSelectedId(index);
    };

    return (
        <StyledRoot >
            <CssBaseline />
            <StyledDrawer
                variant="permanent"
                open={open}
            >
                <List sx={{ padding: 0, marginRight: "auto" }}>
                    <ListItem >
                        <ListItemIcon>
                            {open ? (
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <IconButton
                                        style={{ color: "#0873d0" }}
                                        onClick={handleDrawerToggle}
                                    >
                                        <CloseIcon color="primary" />
                                    </IconButton>
                                    <img src={logo} style={{ marginLeft: 12, width: 100, height: 20 }} alt='log' />
                                </div>
                            ) : (
                                <IconButton onClick={handleDrawerToggle}>
                                    <MenuIcon color="primary" />
                                </IconButton>
                            )}
                        </ListItemIcon>
                    </ListItem>
                </List>
                {
                    listItem.map((item, key) => (
                        <>
                            <List key={item.name} sx={{ paddingLeft: '5px' }}>
                                <Link to={item.name.toLocaleLowerCase()} style={{ textDecoration: "none" }}>
                                    <DrawerListItem
                                        selected={selectedIndex === key + 1}
                                        sx={{ width: "90%" }}
                                        onClick={() => setSelectedIndex(key + 1)}
                                        button
                                    >
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText secondary={item.name} />
                                    </DrawerListItem>
                                </Link>
                            </List>
                            {key === 3 && <Divider />}
                        </>
                    ))
                }
                <Divider style={{ marginTop: "auto" }} />
                <List sx={{ paddingLeft: '5px' }}>
                    <Link to="/signin" style={{ textDecoration: "none" }}>
                        <DrawerListItem
                            selected={selectedIndex === 10}
                            sx={{ width: "90%" }}
                            onClick={() => { setSelectedIndex(10) }}
                            button
                        >
                            <ListItemIcon>
                                <LogoutIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText secondary="Logout" />
                        </DrawerListItem>
                    </Link>
                </List>
            </StyledDrawer>
        </StyledRoot>
    );
}
