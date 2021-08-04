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

const FriendList = ({ title, data, event }) => {
    const classes = useStyles();
    return (
      <Box className={classes.root}>
        <ListSubheader>{title}</ListSubheader>
        
          <List className={classes.list}>
            {data.length > 0 ? (
              data.map((data, index) => (
                <FriendItem
                  key={index}
                  img="https://material-ui.com/static/images/avatar/1.jpg"
                  text={Array.isArray(data.name) ? data.name.map((item,index) => index > 0 ? `/${item}` : item) : data.name }
                  sub={data.email === undefined ? '1:1 대화방' : data.email}
                  uid={data.uid}
                  event={event}
                />
              ))
            ) : (
                <li>리스트가없습니다.</li>
            )}  
          </List>

        









          {/* <List className={classes.list}>
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
          </List> */}

        </Box>
    );
};

export default FriendList;