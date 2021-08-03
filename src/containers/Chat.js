import React,{ useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { fireauth, firedatabase } from "../services/firebase";

import { connect } from "react-redux";
import { rx_all_users, rx_me, rx_roomlistbox } from '../modules/chats'

import { CssBaseline, Grid, Container, Paper } from '@material-ui/core';

import FriendList from "../components/FriendList";
import Message from "../components/Message";
import InputBox from "../components/InputBox";


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



const Chat = ({rx_all_users, all_users, rx_me, rx_roomlistbox, my_room_list}) => {
    const classes = useStyles();



  const handleFriend = () => {
    console.log('handleFriend')
    //roomCheck(all_users, me, you, rx_focusroom, rx_msglist);
  };

  const handleRoom = () => {
    console.log('handleRoom')
    //roomCheck(all_users, me, you, rx_focusroom, rx_msglist);
  };

    useEffect(() => {
        console.log("[표시]Chat.js");

        firedatabase.ref("all_users").on("value", (snapshot) => {
            
            let response = Object.values(snapshot.val());
            rx_all_users(response);
            console.log('response',response)

            const me = response.filter((data) =>
                data.uid.includes(fireauth.currentUser.uid)
            );
            rx_me(me);
            console.log('me',me)
        });    



        firedatabase.ref("room").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
            let response = Object.values(snapshot.val());
            console.log("roomListBox", response);

            const found = response.filter((element) =>
                element.user_uid.some(item => item === fireauth.currentUser.uid )
            );
            rx_roomlistbox(found);
            console.log('found',found);

            }
        });


        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
console.log('all_users',all_users)

    return (
    <React.Fragment>
      <CssBaseline />
        <Container maxWidth="md" className={classes.root}>
            <Paper className={classes.chat_wrap} elevation={1}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={4} className={classes.sectionDesktop}>
                            <FriendList title="전체 친구 리스트" data={all_users} event={ handleFriend } />
                        <FriendList title="나의 방 리스트" data={ my_room_list } event={ handleRoom } />
                    </Grid>
                    <Grid item xs={12} sm={8} style={{ position:'relative' }}>
                        <Message />
                        <InputBox />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    </React.Fragment>
    );
};


const mapStateToProps = (state) => ({
    all_users: state.chats.all_users,
    my_room_list: state.chats.my_room_list,
});

const mapDispatchToProps = (dispatch) => ({
    rx_all_users: (val) => {
        dispatch(rx_all_users(val));
    },
    rx_me: (val) => {
        dispatch(rx_me(val));
    },
    rx_roomlistbox: (val) => {
        dispatch(rx_roomlistbox(val));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
