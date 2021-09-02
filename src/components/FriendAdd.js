import React from "react";
// import PropTypes from "prop-types";
import { firedatabase } from "../services/firebase";

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
  const { onClose, selectedValue, open, data, focusroom } = props;

  const handleClose = () => {
    onClose(selectedValue);
    console.log("까르르르궁", data);
  };

  const handleListItemClick = (uid) => {
    firedatabase
      .ref(`room/${focusroom}/uid`)
      .once("value")
      .then((snapshot) => {
        const f_add = snapshot.val();

        if (!f_add.includes(uid)) {
          //중복 친구가 없는경우 추가
          f_add.push(uid);
          firedatabase
            .ref(`room/${focusroom}`)
            .update({
              uid: f_add,
            })
            .then(() => {
              console.log("친추 완료", f_add);
            })
            .catch((error) => {
              console.log("친추 실패");
            });
        } else {
          //중복 친구가 있는경우 알럿 노출
          alert("이미 추가된 친구입니다.");
        }
      });
    onClose(false);
  };

  console.log("까르르르궁", data);
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">친구 리스트</DialogTitle>
      <List>
        {data.length > 0 ? (
          data.map((item, index) => (
            <ListItem
              button
              onClick={() => handleListItemClick(item.uid)}
              key={index}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
            </ListItem>
          ))
        ) : (
          <li>리스트가없습니다.</li>
        )}
      </List>
    </Dialog>
  );
}

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

const FriendAdd = ({ all_users, focusroom }) => {
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
        focusroom={focusroom}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  all_users: state.chats.all_users,
  focusroom: state.chats.focusroom,
});

export default connect(mapStateToProps, null)(FriendAdd);