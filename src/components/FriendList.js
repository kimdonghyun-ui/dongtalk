import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from '@material-ui/core/ListSubheader';

import FriendItem from './FriendItem';

import {
    Box,
  List,
    Divider
} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {

  },
  list: {
    height: '240px',
    overflowY: 'scroll'
  },
  divider: {
   // margin: '20px 0',
  }
}));

const FriendList = () => {
    const classes = useStyles();
    return (
      <Box className={classes.root}>
          <ListSubheader>전체 친구 리스트</ListSubheader>
          <List className={classes.list}>
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
          </List>

        </Box>
    );
};

export default FriendList;