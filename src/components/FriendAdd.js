import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";

import { blue } from "@material-ui/core/colors";

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, data } = props;

  const handleClose = () => {
    onClose(selectedValue);
    console.log("까르르르궁", data);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  console.log("까르르르궁", data);
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {data.length > 0 ? (
          data.map((item, index) => (
            <ListItem
              button
              //onClick={() => handleListItemClick(email)}
              key={index}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.email} />
            </ListItem>
          ))
        ) : (
          <li>리스트가없습니다.</li>
        )}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const FriendAdd = ({ all_users }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        친구추가
      </Button>
      <SimpleDialog
        data={all_users}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  all_users: state.chats.all_users,
  // myroomlist: state.chats.myroomlist,
  // allroomlist: state.chats.allroomlist,
  // me: state.chats.me[0],
  // focusroom: state.chats.focusroom,
});

//   const mapDispatchToProps = (dispatch) => ({
//     rx_all_users: (val) => {
//       dispatch(rx_all_users(val));
//     },
//     rx_me: (val) => {
//       dispatch(rx_me(val));
//     },
//     rx_myroomlist: (val) => {
//       dispatch(rx_myroomlist(val));
//     },
//     rx_allroomlist: (val) => {
//       dispatch(rx_allroomlist(val));
//     },
//     rx_focusroom: (val) => {
//       dispatch(rx_focusroom(val));
//     },
//     rx_msglist: (val) => {
//       dispatch(rx_msglist(val));
//     },
//   });

export default connect(mapStateToProps, null)(FriendAdd);
