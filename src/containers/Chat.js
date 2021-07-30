import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Container, Paper } from '@material-ui/core';

import FriendList from "../components/FriendList";


const useStyles = makeStyles((theme) => ({
  root: {
        //height:'450px'
    },
    chat_wrap: {
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        height: '577px'
    },
}));



const Chat = () => {
    const classes = useStyles();
    return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="md" className={classes.root}>
            <Paper className={classes.chat_wrap}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={4} className={classes.sectionDesktop}>
                        <FriendList />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        xs=12 sm=6
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    </React.Fragment>
    );
};

export default Chat;