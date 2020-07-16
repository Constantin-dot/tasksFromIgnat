import React from "react";
import {NavLink} from "react-router-dom";
import {Button, List, ListItem, SwipeableDrawer} from "@material-ui/core";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    button: {
        margin: 10,
    },
    item: {
        color: "gold",
        textDecoration: "none"
    }
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';


function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button key={'PreJunior'} >
                    <NavLink to="/pre_junior" >
                        Pre Junior
                    </NavLink>
                </ListItem>
                <ListItem button key={'Junior'} >
                    <NavLink to="/junior" >
                        Junior
                    </NavLink>
                </ListItem>
                <ListItem button key={'JuniorPlus'} >
                    <NavLink to="/junior_plus" >
                        Junior Plus
                    </NavLink>
                </ListItem>
            </List>
        </div>
    );


    return (

        <div>
            {(['left', 'right', 'top', 'bottom'] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button variant={"outlined"}
                            className={classes.button}
                            onClick={toggleDrawer(anchor, true)}
                    >
                        {anchor}
                    </Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        className={classes.item}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default SwipeableTemporaryDrawer;