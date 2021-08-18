import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { CM_all_users, CM_allroomlist, CM_allmsglist, CM_Roomadd, login_maintain, CM_connectValue, CM_msgLength } from "../helpers/common";

import {
  rx_all_users,
  rx_me,
  rx_myroomlist,
  rx_allroomlist,
  rx_focusroom,
  rx_allmsglist,
  rx_connected,
  rx_focusmsg,
  rx_loading1,
  rx_loading2,
  rx_loading3
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
  focusmsg,
  rx_loading1,
  rx_loading2,
  rx_loading3,
  loading1,
  loading2,
  loading3
}) => {
  const classes = useStyles();



  
  const handleFriend = (you) => {
    CM_Roomadd(me, you, allroomlist);
    // const data = [me.uid, you];
    // const clone_data = [me.uid, you].sort();
    // console.log("handleFriend", data[0], data[1]);

    // console.log(allroomlist);
    // let clone_allroomlist = JSON.parse(JSON.stringify(allroomlist));
    // clone_allroomlist = clone_allroomlist.some(
    //   (element) =>
    //     JSON.stringify(element.uid.sort()) === JSON.stringify(clone_data)
    // );

    // if (!clone_allroomlist) {
    //   var newPostKey = firedatabase.ref("room").push().key;
    //   var postData = {
    //     uid: [me.uid, you],
    //     name: [],
    //     msg_key: newPostKey,
    //   };
    //   var updates = {};
    //   updates["/room/" + newPostKey] = postData;
    //   return firedatabase.ref().update(updates);
    // } else {
    //   alert("이미 방이 존재합니다.");
    // }
  };

  const handleRoom = (msg_key) => {
    rx_focusroom(msg_key);
  };

  useEffect(() => {
    console.log("[표시]Chat.js");
    CM_connectValue(rx_connected);
    rx_loading1(true);
    rx_loading2(true);
    rx_loading3(true);
    CM_all_users(rx_all_users, rx_me, rx_loading1);
    CM_allroomlist(rx_allroomlist, rx_myroomlist, rx_loading2);
    CM_allmsglist(rx_allmsglist,rx_loading3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    allmsglist[focusroom] ? rx_focusmsg(Object.values(allmsglist[focusroom])) : rx_focusmsg([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allmsglist,focusroom]);

  const [jubok, setJubok] = useState(0);
  useEffect(() => {
    if (allroomlist) {
      if (Object.values(allmsglist).length > 0 && jubok === 0) {
        setJubok(1);
        CM_msgLength(allmsglist)
        console.log('초기 메시지 갯수 세팅')
      }
    }
    
    //CM_msgLength(allmsglist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allroomlist,allmsglist]);


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
                loading={ loading1 }
                event={handleFriend}
              />
              <Divider />
              <FriendList
                title="나의 방 리스트"
                data={myroomlist}
                loading={ loading2 }
                event={handleRoom}
              />
            </Grid>
            <Grid item xs={12} sm={8} style={{ position: "relative" }}>
              <Message focusmsg={focusmsg} loading={ loading3 } />
              <InputBox />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
};


Chat.propTypes = {
  rx_all_users: PropTypes.func,
  all_users: PropTypes.array,
  rx_me: PropTypes.func,
  me: PropTypes.object,
  rx_myroomlist: PropTypes.func,
  myroomlist: PropTypes.array,
  rx_allroomlist: PropTypes.func,
  allroomlist: PropTypes.array,
  rx_focusroom: PropTypes.func,
  focusroom: PropTypes.string,
  rx_allmsglist: PropTypes.func,
  rx_connected: PropTypes.func,
  allmsglist: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  rx_focusmsg: PropTypes.func,
  focusmsg: PropTypes.array,
};

const mapStateToProps = (state) => ({
  all_users: state.chats.all_users,
  myroomlist: state.chats.myroomlist,
  allroomlist: state.chats.allroomlist,
  me: state.chats.me[0],
  focusroom: state.chats.focusroom,
  allmsglist: state.chats.allmsglist,
  focusmsg: state.chats.focusmsg,
  loading1: state.chats.loading1,
  loading2: state.chats.loading2,
  loading3: state.chats.loading3
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
  },
  rx_loading1: (val) => {
    dispatch(rx_loading1(val));
  },
  rx_loading2: (val) => {
    dispatch(rx_loading2(val));
  },
  rx_loading3: (val) => {
    dispatch(rx_loading3(val));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
