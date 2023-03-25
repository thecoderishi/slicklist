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
import { makeStyles } from "@mui/styles";
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

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: 73,
    },
    listitems: {
        width: "90%",
    },
    list: {
        width: "90%",
    },
    head: {
        padding: 0,
        marginRight: "auto",
        marginLeft: "15px",
    },
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

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const [selectedIndex, setSelectedId] = React.useState(1);
    const setSelectedIndex = (index) => {
        setSelectedId(index);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <List className={classes.head}>
                    <ListItem >
                        <ListItemIcon>
                            {open ? (
                                <IconButton
                                    style={{ color: "#0873d0" }}
                                    onClick={handleDrawerToggle}
                                >
                                    <CloseIcon color="primary" />
                                </IconButton>
                            ) : (
                                <IconButton onClick={handleDrawerToggle}>
                                    <MenuIcon color="primary" />
                                </IconButton>
                            )}
                        </ListItemIcon>
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            {open && (
                                <img src={logo} style={{ marginLeft: 12, width: 100 }} alt='log' />
                            )}
                        </ListItemIcon>
                    </ListItem>
                </List>
                {
                    listItem.map((item, key) => (
                        <>
                            <List key={item.name} className={classes.list}>
                                <Link to={item.name.toLocaleLowerCase()} style={{ textDecoration: "none" }}>
                                    <DrawerListItem
                                        selected={selectedIndex === key + 1}
                                        className={classes.listitems}
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
                <List className={classes.list}>
                    <Link to="/signin" style={{ textDecoration: "none" }}>
                        <DrawerListItem
                            selected={selectedIndex === 10}
                            className={classes.listitems}
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
            </Drawer>
        </div>
    );
}
