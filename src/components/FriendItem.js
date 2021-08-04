import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

import {
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
} from '@material-ui/core';

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

const FriendItem = ({ img,text,sub,uid,event }) => {
    return (
            <ListItem
        button
        onClick={()=>event(uid)}
            >
              <ListItemAvatar>
                <StyledBadge
                  invisible={!true}
                  overlap="circular"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  variant="dot"
                >
                  <Avatar
                        alt="Remy Sharp"
                        src={ img }
                  />
                </StyledBadge>

                {/* <Avatar>
                  <BeachAccessIcon />
                </Avatar> */}
              </ListItemAvatar>
            <ListItemText primary={text} secondary={ sub } />
            </ListItem>
    );
};

export default FriendItem;