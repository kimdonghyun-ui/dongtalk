import React, { useState } from "react";
import { connect } from "react-redux";
import { fireauth } from "../services/firebase";
import { sendChat } from "../helpers/common";

import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { Box, Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  InputBox: {
    display: "flex",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: "0",
    width: "93%",
    margin: "2%",
    padding: "2%",
    boxShadow: "1px 1px 5px #a0a0a0",
    borderRadius: "5px",
    justifyContent: "space-between",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const InputBox = ({ focusroom, me }) => {
  const classes = useStyles();
  const [msg, setMsg] = useState("");

  const handleOnChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    setMsg("");
    sendChat(
      {
        message: msg,
        timestamp: Date.now(),
        uid: fireauth.currentUser.uid,
        name:
          fireauth.currentUser.displayName === null
            ? me.name
            : fireauth.currentUser.displayName,
      },
      focusroom
    );
  };

  return (
    <form onSubmit={handleSumbit}>
      <Box className={classes.InputBox}>
        <TextField
          id="outlined-basic"
          label="메시지"
          value={msg}
          onChange={handleOnChange}
          style={{ width: "100%" }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Box>
    </form>
  );
};

const mapStateToProps = (state) => ({
  focusroom: state.chats.focusroom,
  me: state.chats.me[0],
});

export default connect(mapStateToProps, null)(InputBox);