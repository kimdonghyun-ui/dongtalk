import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { rx_remove } from "../modules/chats";
import { fireauth } from "../services/firebase";

import * as dateFns from "date-fns";
import { removeChats } from "../helpers/common";
import ListSubheader from "@material-ui/core/ListSubheader";

import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import FriendAdd from "./FriendAdd";

const useStyles = makeStyles((theme) => ({
  lBox: {
    flexDirection: "row-reverse",
    display: "flex",
    textAlign: "right",
  },
  rBox: {
    flexDirection: "row-reverse",
    display: "flex",
    textAlign: "right",
  },
  appBar: {
    top: "auto",
    bottom: 0,
    left: 0,
    width: "100%",
    "& input,& button": {
      width: "100%",
      height: "50px",
    },
  },

  listBox: {
    display: "flex",
    flexDirection: "column",
  },
  listBoxItem: {},
  listBoxItemavatar: {
    display: "flex",
  },
}));

const Message = ({ focusmsg ,focusroom, rx_remove }) => {
  const classes = useStyles();
  console.log("Message-focusroom", focusroom);
  const intervalId = useRef(null);




function scrollToMyRef (){
    const scroll =
      intervalId.current.scrollHeight -
      intervalId.current.clientHeight;
    intervalId.current.scrollTo(0, scroll);
  };




  useEffect(() => {
    console.log("[표시]Message.js");
    scrollToMyRef();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusmsg, focusroom]);

  return (
    <Box style={{ height: "577px", overflowY: "scroll", paddingBottom: "15%" }} ref={intervalId}>
      <ListSubheader style={{ display:'flex',justifyContent:'space-between',backgroundColor:'#fff' }}>
        채팅방
        {focusroom !== "" &&
          <FriendAdd />
        }
      </ListSubheader>
      <List className={classes.listBox}>
        {focusmsg.length > 0 ? (
          focusmsg.map((data, index) => (
            <ListItem key={index} className={classes.listBoxItem}>
              <ListItemAvatar
                className={classes.listBoxItemavatar}
                style={{
                  justifyContent: false ? "flex-end" : "flex-start",
                }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>

              <ListItemText
                primary={data.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                      style={{ wordBreak: "break-all" }}
                    >
                      {data.message}
                    </Typography>
                    <br />
                    {dateFns.format(data.timestamp, "yyyy-MM-dd-HH-mm-ss")}
                  </React.Fragment>
                }
              />
              <Button
                  style={{
                    display:
                      fireauth.currentUser.uid !== data.uid
                        ? "none"
                        : "inline-flex",
                  }}
                onClick={() => removeChats(focusroom, data.key, rx_remove)}
              >
                삭제
              </Button>
            </ListItem>
          ))
        ) : (
          <li>리스트가없습니다.</li>
        )}
      </List>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  focusroom: state.chats.focusroom,
});

const mapDispatchToProps = (dispatch) => ({
  rx_remove: (val) => {
    dispatch(rx_remove(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
