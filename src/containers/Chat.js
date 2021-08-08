import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fireauth, firedatabase } from "../services/firebase";

import { connect } from "react-redux";
import {
  rx_all_users,
  rx_me,
  rx_myroomlist,
  rx_allroomlist,
  rx_focusroom,
  rx_msglist,
} from "../modules/chats";

import {
  CssBaseline,
  Grid,
  Container,
  Paper,
  Divider,
} from "@material-ui/core";

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
    height: "577px",
  },
}));

const Chat = ({
  rx_all_users,
  all_users,
  rx_me,
  me,
  rx_myroomlist,
  myroomlist,
  rx_allroomlist,
  allroomlist,
  rx_focusroom,
  focusroom,
  rx_msglist,
}) => {
  const classes = useStyles();
  const [msgs, setMsg] = useState([]);

  const handleFriend = (you) => {
    const data = [me.uid, you];
    const clone_data = [me.uid, you].sort();
    console.log("handleFriend", data[0], data[1]);

    console.log(allroomlist);
    let clone_allroomlist = JSON.parse(JSON.stringify(allroomlist));
    clone_allroomlist = clone_allroomlist.some(
      (element) =>
        JSON.stringify(element.uid.sort()) === JSON.stringify(clone_data)
    );

    if (!clone_allroomlist) {
      var newPostKey = firedatabase.ref("room").push().key;
      var postData = {
        uid: [me.uid, you],
        name: [],
        msg_key: newPostKey,
      };
      var updates = {};
      updates["/room/" + newPostKey] = postData;
      return firedatabase.ref().update(updates);
    } else {
      alert("이미 방이 존재합니다.");
    }
  };

  const handleRoom = (msg_key) => {
    rx_focusroom(msg_key);
    //roomCheck(all_users, me, you, rx_focusroom, rx_msglist);
  };

  useEffect(() => {
    console.log("[표시]Chat.js");

    firedatabase.ref("all_users").on("value", (snapshot) => {
      let response = Object.values(snapshot.val());
      rx_all_users(response);
      console.log("response", response);

      const me = response.filter((data) =>
        data.uid.includes(fireauth.currentUser.uid)
      );
      rx_me(me);
      console.log("me", me);
    });

    firedatabase.ref("room").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        let response = Object.values(snapshot.val());
        console.log("roomListBox", response);
        rx_allroomlist(response);

        const found = response.filter((element) =>
          element.uid.some((item) => item === fireauth.currentUser.uid)
        );
        rx_myroomlist(found);
        console.log("found", found);
      }
    });

    firedatabase.ref("msg").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        let response = snapshot.val();
        setMsg(response);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("all_users", all_users);
  console.log("focusroom", focusroom);
  useEffect(() => {
    msgs && focusroom && rx_msglist(Object.values(msgs[focusroom]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msgs, focusroom]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.root}>
        <Paper className={classes.chat_wrap} elevation={1}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={4} className={classes.sectionDesktop}>
              <FriendList
                title="전체 친구 리스트"
                data={all_users}
                event={handleFriend}
              />
              <Divider />
              <FriendList
                title="나의 방 리스트"
                data={myroomlist}
                event={handleRoom}
              />
            </Grid>
            <Grid item xs={12} sm={8} style={{ position: "relative" }}>
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
  myroomlist: state.chats.myroomlist,
  allroomlist: state.chats.allroomlist,
  me: state.chats.me[0],
  focusroom: state.chats.focusroom,
});

const mapDispatchToProps = (dispatch) => ({
  rx_all_users: (val) => {
    dispatch(rx_all_users(val));
  },
  rx_me: (val) => {
    dispatch(rx_me(val));
  },
  rx_myroomlist: (val) => {
    dispatch(rx_myroomlist(val));
  },
  rx_allroomlist: (val) => {
    dispatch(rx_allroomlist(val));
  },
  rx_focusroom: (val) => {
    dispatch(rx_focusroom(val));
  },
  rx_msglist: (val) => {
    dispatch(rx_msglist(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
