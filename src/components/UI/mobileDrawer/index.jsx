import React from 'react';
import {
    Grid,
    ListItemText,
    ListItemIcon,
    IconButton,
    Divider,
    List,
    Drawer,
} from '@mui/material';
import DrawerListItem from "../listItems";
import logo from "../../../assets/logo.png"
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import InboxIcon from '@mui/icons-material/Inbox';
import InventoryIcon from '@mui/icons-material/Inventory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import SettingsIcon from '@mui/icons-material/Settings';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles((theme) => ({
    hideShow: {
        visibility: 'hidden',
        height: '0',
        [theme.breakpoints.down('sm')]: {
            visibility: 'visible',
            height: 'auto',
            backgroundColor: '#494c7d'
        }
    },
}));

export default function MobileDrawer() {
    const classes = useStyles();
    const [show, setShow] = React.useState(false);

    const toggleDrawer = () => () => {
        setShow(!show)
    };

    const [selectedIndex, setSelectedId] = React.useState(0);
    const setSelectedIndex = (index) => {
        setSelectedId(index);
    }

    const listItem = [
        {
            name: 'Profile',
            icon: <AccountCircleIcon color="primary" />
        },
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

    const list = () => (
        <div
            onClick={toggleDrawer()}
        >

            <Divider style={{ marginTop: "auto" }} />
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
                        {key % 3 === 0 && <Divider />}
                    </>
                ))
            }

            <Divider style={{ marginTop: "auto" }} />
            <List className={classes.list}>
                <Link to="/login" style={{ textDecoration: "none" }}>
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
        </div>
    );

    return (
        <div className={classes.hideShow}>
            <Grid container alignItems='center' style={{ height: '70px' }}>
                <Grid item sm={2}>
                    <IconButton onClick={toggleDrawer()}>
                        <MenuIcon sx={{ color: '#fff' }} />
                    </IconButton>
                    <Drawer anchor='left' open={show} onClose={toggleDrawer()}>
                        {list('right')}
                    </Drawer>
                </Grid>
                <Grid item sm={2}>
                    <img src={logo} alt="" style={{ float: 'right', marginLeft: 10, width: 100 }} />
                </Grid>
            </Grid>
        </div>
    );
}