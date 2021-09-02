import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { CM_removeRooms } from "../helpers/common";
import { connect } from "react-redux";
import { fireauth } from "../services/firebase";

import { rx_focusroom, rx_focusmsg } from "../modules/chats";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
} from "@material-ui/core";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const FriendItem = ({
  text,
  sub,
  uid,
  avatar,
  msg_key,
  me,
  invisible,
  event,
  rx_focusroom,
  rx_focusmsg,
  all_users,
  msglength,
  msglength2,
}) => {
  const hello = (msg_key) => {
    if (msglength && msglength2) {
      if (
        Object.values(msglength).length ===
        Object.values(msglength2[fireauth.currentUser.uid]).length
      ) {
        if (
          msglength[msg_key] !== undefined &&
          msglength2[fireauth.currentUser.uid][msg_key] !== undefined
        ) {
          console.log("갯수구하기", msglength[msg_key] && msglength[msg_key]);
          console.log(
            "갯수구하기2",
            msglength2[fireauth.currentUser.uid][msg_key] &&
              msglength2[fireauth.currentUser.uid][msg_key]
          );
          return (
            msglength &&
            msglength2 &&
            msglength[msg_key] - msglength2[fireauth.currentUser.uid][msg_key]
          );
        }
      }
    }
  };

  return (
    <li style={{ display: msg_key ? "flex" : "block" }}>
      <ListItem button onClick={() => (msg_key ? event(msg_key) : event(uid))}>
        <ListItemAvatar>
          <Badge color="secondary" badgeContent={msg_key ? hello(msg_key) : 0}>
            <StyledBadge
              invisible={invisible}
              overlap="circular"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src={avatar} />
            </StyledBadge>
          </Badge>
        </ListItemAvatar>
        <ListItemText primary={text} secondary={sub} />
      </ListItem>
      {msg_key && (
        <Button
          onClick={() =>
            CM_removeRooms(msg_key, me, rx_focusroom, rx_focusmsg, all_users)
          }
        >
          삭제
        </Button>
      )}
    </li>
  );
};

const mapStateToProps = (state) => ({
  all_users: state.chats.all_users,
  msglength: state.chats.msglength,
  msglength2: state.chats.msglength2,
});

const mapDispatchToProps = (dispatch) => ({
  rx_focusroom: (val) => {
    dispatch(rx_focusroom(val));
  },
  rx_focusmsg: (val) => {
    dispatch(rx_focusmsg(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendItem);
