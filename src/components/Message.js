import React, { useState } from "react";


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



const Message = () => {
    const classes = useStyles();
    const [msg_list, setMsg_list] = useState([
        {
            message: '메롱',
            name: '김동현',
            timestamp: '23232',
            uid:"JvqEv4KxyOWOpsoTzA0Bl44BV"
      },
        {
            message: '메롱',
            name: '김동현',
            timestamp: '23232',
            uid:"JvqEv4KxyOWOpsoTzA0Bl44BV"
      },
        {
            message: '메롱',
            name: '김동현',
            timestamp: '23232',
            uid:"JvqEv4KxyOWOpsoTzA0Bl44BV"
      },
        {
            message: '메롱',
            name: '김동현',
            timestamp: '23232',
            uid:"JvqEv4KxyOWOpsoTzA0Bl44BV"
      },
        {
            message: '메롱',
            name: '김동현',
            timestamp: '23232',
            uid:"JvqEv4KxyOWOpsoTzA0Bl44BV"
      },
        {
            message: '메롱',
            name: '김동현',
            timestamp: '23232',
            uid:"JvqEv4KxyOWOpsoTzA0Bl44BV"
      },
        
        {
            message: '메롱',
            name: '김동현',
            timestamp: '23232',
            uid:"JvqEv4KxyOWOpsoTzA0Bl44BV"
        },
        {
            message: '메롱1',
            name: '김동현1',
            timestamp: '232321',
            uid:"JvqEv4KxyOWOpsoTzA0Bl44BV1"
        }
  ]);


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
                    onClick={() => console.log('삭제버튼')}
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

export default Message;