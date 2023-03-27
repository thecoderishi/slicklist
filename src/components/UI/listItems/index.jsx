import { ListItem } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
    '&$selected': {
        backgroundColor: '#c1daed8f',
        borderRadius: 20,
        '& .MuiListItemIcon-root': {
            color: '#0873d0',
        },
        '&:hover': {
            backgroundColor: '#c1daed8f',
            borderRadius: 10,
        },
    },
    '&:hover': {
        backgroundColor: '#c1daed8f',
        borderRadius: 10,
    },
    ...(selected && {
        backgroundColor: '#c1daed8f',
        borderRadius: 10,
        // border: '1px solid red',
    }),
}))


export default function DrawerListItem(props) {
    return (
        <>
            <StyledListItem {...props} selected={props.selected} />
        </>
    )
}