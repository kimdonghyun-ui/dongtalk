import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { removeRooms } from "../helpers/databox";
import { connect } from "react-redux";

import { rx_focusroom, rx_msglist } from "../modules/chats";
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
  img,
  text,
  sub,
  uid,
  msg_key,
  me,
  invisible,
  event,
  rx_focusroom,
  rx_msglist,
}) => {
  return (
    <li style={{ display: msg_key ? "flex" : "block" }}>
      <ListItem button onClick={() => (msg_key ? event(msg_key) : event(uid))}>
        <ListItemAvatar>
          <StyledBadge
            invisible={invisible}
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={img} />
          </StyledBadge>

          {/* <Avatar>
                  <BeachAccessIcon />
                </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary={text} secondary={sub} />
      </ListItem>
      {msg_key && (
        <Button
          onClick={() => removeRooms(msg_key, me, rx_focusroom, rx_msglist)}
        >
          삭제
        </Button>
      )}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  rx_focusroom: (val) => {
    dispatch(rx_focusroom(val));
  },
  rx_msglist: (val) => {
    dispatch(rx_msglist(val));
  },
});

export default connect(null, mapDispatchToProps)(FriendItem);
