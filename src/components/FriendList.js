import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import { connect } from "react-redux";

import FriendItem from "./FriendItem";

import { Box, List, CircularProgress } from "@material-ui/core";

import { CM_me_connected } from "../helpers/common";

const useStyles = makeStyles((theme) => ({
  root: {},
  list: {
    height: "456px",
    overflowY: "scroll",
  },
  divider: {
    // margin: '20px 0',
  },
}));

const FriendList = ({
  title,
  data,
  event,
  all_users,
  all_connected,
  me,
  loading,
}) => {
  const classes = useStyles();

  function uid_name(names) {
    return (
      names !== undefined &&
      all_users.length > 0 &&
      all_users.filter((data) => data.uid === names)[0].name
    );
  }

  useEffect(() => {
    console.log("[표시]FriendList.js");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box className={classes.root}>
      <ListSubheader>{title}</ListSubheader>

      <List className={classes.list}>
        {loading && (
          <Box
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="secondary" />
          </Box>
        )}

        {data.length > 0 ? (
          data.map((data, index) => (
            <FriendItem
              key={index}
              invisible={!CM_me_connected(all_connected, data.uid)}
              text={
                Array.isArray(data.uid)
                  ? data.uid.map((item, index) =>
                      index > 0 ? `/${uid_name(item)}` : uid_name(item)
                    )
                  : uid_name(data.uid)
              }
              sub={data.email === undefined ? "1:1 대화방" : data.email}
              uid={data.uid}
              avatar={data.avatar}
              msg_key={data.msg_key}
              me={me}
              event={event}
            />
          ))
        ) : (
          <li>리스트가없습니다.</li>
        )}
      </List>

      {/* <List className={classes.list}>
            <FriendItem img="https://material-ui.com/static/images/avatar/1.jpg" text="김동현" sub="dongdong@stunitas.com" />
            <FriendItem img="https://material-ui.com/static/images/avatar/1.jpg" text="김동현" sub="dongdong@stunitas.com" />
            <FriendItem img="https://material-ui.com/static/images/avatar/1.jpg" text="김동현" sub="dongdong@stunitas.com" />
            <FriendItem img="https://material-ui.com/static/images/avatar/1.jpg" text="김동현" sub="dongdong@stunitas.com" />
          </List>
          
          <Divider className={classes.divider} />
          <ListSubheader>나의 방 리스트</ListSubheader>
          <List className={classes.list}>
            <FriendItem img="https://material-ui.com/static/images/avatar/1.jpg" text="김동현/박금주" sub="1:1 대화방" />
            <FriendItem img="https://material-ui.com/static/images/avatar/1.jpg" text="김동현/박금주" sub="1:1 대화방" />
            <FriendItem img="https://material-ui.com/static/images/avatar/1.jpg" text="김동현/박금주" sub="1:1 대화방" />
            <FriendItem img="https://material-ui.com/static/images/avatar/1.jpg" text="김동현/박금주" sub="1:1 대화방" />
          </List> */}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  all_users: state.chats.all_users,
  all_connected: state.chats.all_connected,
  me: state.chats.me[0],
});

// const mapDispatchToProps = (dispatch) => ({
//   rx_focusroom: (val) => {
//     dispatch(rx_focusroom(val));
//   },
// });

export default connect(mapStateToProps, null)(FriendList);
