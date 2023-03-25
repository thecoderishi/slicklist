import { ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
    root: {
        '&$selected': {
            backgroundColor: '#c1daed8f',
            borderRadius: 10,
            "& .MuiListItemIcon-root": {
                color: "#0873d0"
            },
            '&:hover': {
                backgroundColor: '#c1daed8f',
                borderRadius: 10,
            }
        },
        '&:hover': {
            backgroundColor: '#c1daed8f',
            borderRadius: 10,
        }
    },
    selected: {
        backgroundColor: '#c1daed8f',
        borderRadius: 10
    },
});


export default function DrawerListItem(props) {
    const classes = useStyles();
    return (
        <>
            <ListItem {...props} classes={{ root: classes.root, selected: classes.selected }} />
        </>
    )
}