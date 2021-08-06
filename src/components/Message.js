import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { fireauth, firedatabase } from "../services/firebase";
import {
  rx_remove
} from "../modules/chats";

import { removeChats } from "../helpers/databox";

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
        display: 'flex',
            flexDirection: 'column',
    },
    listBoxItem: {

    },
    listBoxItemavatar: {
        display: 'flex',
    }
    
}));



const Message = ({ focusroom, rx_remove, msglist }) => {
    const classes = useStyles();
    const [msg_list, setMsg_list] = useState([]);
    console.log('Message-focusroom',focusroom)


    useEffect(() => {
      console.log("[표시]Message.js");
      setMsg_list((msglist && focusroom) && ( msglist[focusroom] ? Object.values(msglist[focusroom]) : ''  ));
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [msglist,focusroom]);
  
  return (
    <Box style={{ height:'577px',overflowY:'scroll',paddingBottom: '15%',}}>
        <List className={classes.listBox}>
          {msg_list.length > 0 ? (
            msg_list.map((data, index) => (
              <ListItem
                key={index}
                    className={classes.listBoxItem}
              >

                <ListItemAvatar
                    className={classes.listBoxItemavatar}
                    style={{
                        justifyContent:
                        false
                        ? "flex-end"
                        : "flex-start",
                    }}
                >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
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
                            { data.timestamp }
                      </React.Fragment>
                    }
                  />
                  <Button
                    style={{
                      display:
                        false
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
  msglist: state.chats.msglist
});

const mapDispatchToProps = (dispatch) => ({
  rx_remove: (val) => {
    dispatch(rx_remove(val));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
