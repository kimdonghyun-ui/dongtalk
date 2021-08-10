import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { firedatabase } from "../services/firebase";
import { connect } from "react-redux";
import { CM_all_users, CM_allroomlist, CM_allmsglist, login_maintain, CM_connectValue } from "../helpers/common";

import {
  rx_all_users,
  rx_me,
  rx_myroomlist,
  rx_allroomlist,
  rx_focusroom,
  rx_allmsglist,
  rx_connected,
  rx_focusmsg
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
  rx_allmsglist,
  rx_connected,
  allmsglist,
  rx_focusmsg,
  focusmsg
}) => {
  const classes = useStyles();

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
  };

  useEffect(() => {
    console.log("[표시]Chat.js");
    CM_connectValue(rx_connected);
    CM_all_users(rx_all_users, rx_me, me);
    CM_allroomlist(rx_allroomlist, rx_myroomlist);
    CM_allmsglist(rx_allmsglist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    allmsglist[focusroom] ? rx_focusmsg(Object.values(allmsglist[focusroom])) : rx_focusmsg([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allmsglist,focusroom]);

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
              <Message focusmsg={focusmsg} />
              <InputBox />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
};


Chat.propTypes = {
  // rx_authenticated: PropTypes.func,
  // authenticated: PropTypes.bool,
};


const mapStateToProps = (state) => ({
  all_users: state.chats.all_users,
  myroomlist: state.chats.myroomlist,
  allroomlist: state.chats.allroomlist,
  me: state.chats.me[0],
  focusroom: state.chats.focusroom,
  allmsglist: state.chats.allmsglist,
  focusmsg: state.chats.focusmsg,
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
  rx_allmsglist: (val) => {
    dispatch(rx_allmsglist(val));
  },
  rx_connected: (val) => {
    dispatch(rx_connected(val));
  },
  login_maintain: (val) => {
    dispatch(login_maintain(val));
  },
  rx_focusmsg: (val) => {
    dispatch(rx_focusmsg(val));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
