import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from '@material-ui/core/ListSubheader';
import { connect } from "react-redux";

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




const FriendList = ({ title, data, event, all_users }) => {
  const classes = useStyles();
  

//   function hello(names) {

    
//     return (names !== undefined) && all_users.filter(data => data.uid === names);
// }

    return (
      <Box className={classes.root}>
        <ListSubheader>{title}</ListSubheader>
        
          <List className={classes.list}>
            {data.length > 0 ? (
              data.map((data, index) => (
                <FriendItem
                  key={index}
                  img="https://material-ui.com/static/images/avatar/1.jpg"
                  //text={Array.isArray(hello(data.uid)) ? data.name.map((item,index) => index > 0 ? `/${item}` : item) : hello(data.uid) }
                  sub={hello(data.uid)}
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


const mapStateToProps = (state) => ({
  all_users: state.chats.all_users,
  // myroomlist: state.chats.myroomlist,
  // allroomlist: state.chats.allroomlist,
  // me: state.chats.me[0],
});

// const mapDispatchToProps = (dispatch) => ({
//   rx_all_users: (val) => {
//     dispatch(rx_all_users(val));
//   },
//   rx_me: (val) => {
//     dispatch(rx_me(val));
//   },
//   rx_myroomlist: (val) => {
//     dispatch(rx_myroomlist(val));
//   },
//   rx_allroomlist: (val) => {
//     dispatch(rx_allroomlist(val));
//   },
// });

export default connect(mapStateToProps, null)(FriendList);