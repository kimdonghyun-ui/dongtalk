import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import {
  CM_all_users,
  CM_allroomlist,
  CM_allmsglist,
  CM_Roomadd,
  login_maintain,
  CM_connectValue,
  CM_msgLength,
  CM_my_msgLength,
  CM_my_msgLength_change,
  CM_my_msgLength_change2
} from "../helpers/common";

import {
  rx_all_users,
  rx_me,
  rx_myroomlist,
  rx_allroomlist,
  rx_focusroom,
  rx_allmsglist,
  rx_connected,
  rx_focusmsg,
  rx_loading1,
  rx_loading2,
  rx_loading3,
  rx_msglength,
  rx_msglength2,
  rx_tabindex,
  rx_all_my_msglength
} from "../modules/chats";

import {
  CssBaseline,
} from "@material-ui/core";

import FriendList from "../components/FriendList";
import Message from "../components/Message";
import InputBox from "../components/InputBox";
import TabBox from "../components/TabBox";

const Chat = ({
  rx_all_users,
  all_users,
  rx_me,
  me,
  rx_myroomlist,
  myroomlist,
  rx_allroomlist,
  allroomlist,
  rx_focusroom,
  focusroom,
  rx_allmsglist,
  rx_connected,
  allmsglist,
  rx_focusmsg,
  focusmsg,
  rx_loading1,
  rx_loading2,
  rx_loading3,
  loading1,
  loading2,
  loading3,
  rx_msglength,
  rx_msglength2,
  msglength,
  msglength2,
  rx_tabindex,
  rx_all_my_msglength
}) => {


  const handleFriend = (you) => {
    CM_Roomadd(me, you, allroomlist, rx_focusroom, rx_tabindex);
  };

  const handleRoom = (msg_key) => {
    console.log("handleRoom");
    rx_focusroom(msg_key);
    CM_my_msgLength_change(msg_key, rx_msglength2, msglength2, rx_tabindex);
  };

  useEffect(() => {
    console.log("[표시]Chat.js");
    CM_connectValue(rx_connected);
    rx_loading1(true);
    rx_loading2(true);
    rx_loading3(true);
    CM_all_users(rx_all_users, rx_me, rx_loading1);
    CM_allroomlist(rx_allroomlist, rx_myroomlist, rx_loading2);
    CM_allmsglist(rx_allmsglist, rx_loading3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    allmsglist[focusroom]
      ? rx_focusmsg(Object.values(allmsglist[focusroom]))
      : rx_focusmsg([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allmsglist, focusroom]);

  useEffect(() => {
    if (allroomlist.length > 0) {
      CM_msgLength(allmsglist, allroomlist, rx_msglength);
      console.log("초기 메시지 갯수 세팅");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allroomlist, allmsglist]);

  useEffect(() => {
    if (allroomlist.length > 0) {
      CM_my_msgLength(allroomlist, rx_msglength2, all_users);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allroomlist]);

  useEffect(() => {
    if (msglength !== null && msglength2 !== null) {
        CM_my_msgLength_change2(msglength, msglength2, myroomlist, rx_all_my_msglength);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msglength,msglength2]);

  return (
    <React.Fragment>
      <CssBaseline />
      <TabBox
        content={[
          <FriendList
            title="전체 친구 리스트"
            data={all_users}
            loading={loading1}
            event={handleFriend}
          />,
          <FriendList
            title="나의 방 리스트"
            data={myroomlist}
            loading={loading2}
            event={handleRoom}
          />,
          <>
            <Message focusmsg={focusmsg} loading={loading3} />
            <InputBox />
          </>,
        ]}
      />
    </React.Fragment>
  );
};

Chat.propTypes = {
  rx_all_users: PropTypes.func,
  all_users: PropTypes.array,
  rx_me: PropTypes.func,
  me: PropTypes.object,
  rx_myroomlist: PropTypes.func,
  myroomlist: PropTypes.array,
  rx_allroomlist: PropTypes.func,
  allroomlist: PropTypes.array,
  rx_focusroom: PropTypes.func,
  focusroom: PropTypes.string,
  rx_allmsglist: PropTypes.func,
  rx_connected: PropTypes.func,
  allmsglist: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  rx_focusmsg: PropTypes.func,
  focusmsg: PropTypes.array,
};

const mapStateToProps = (state) => ({
  all_users: state.chats.all_users,
  myroomlist: state.chats.myroomlist,
  allroomlist: state.chats.allroomlist,
  me: state.chats.me[0],
  focusroom: state.chats.focusroom,
  allmsglist: state.chats.allmsglist,
  focusmsg: state.chats.focusmsg,
  loading1: state.chats.loading1,
  loading2: state.chats.loading2,
  loading3: state.chats.loading3,
  msglength: state.chats.msglength,
  msglength2: state.chats.msglength2,
});

const mapDispatchToProps = (dispatch) => ({
  rx_all_users: (val) => {
    dispatch(rx_all_users(val));
  },
  rx_me: (val) => {
    dispatch(rx_me(val));
  },
  rx_myroomlist: (val) => {
    dispatch(rx_myroomlist(val));
  },
  rx_allroomlist: (val) => {
    dispatch(rx_allroomlist(val));
  },
  rx_focusroom: (val) => {
    dispatch(rx_focusroom(val));
  },
  rx_allmsglist: (val) => {
    dispatch(rx_allmsglist(val));
  },
  rx_connected: (val) => {
    dispatch(rx_connected(val));
  },
  login_maintain: (val) => {
    dispatch(login_maintain(val));
  },
  rx_focusmsg: (val) => {
    dispatch(rx_focusmsg(val));
  },
  rx_loading1: (val) => {
    dispatch(rx_loading1(val));
  },
  rx_loading2: (val) => {
    dispatch(rx_loading2(val));
  },
  rx_loading3: (val) => {
    dispatch(rx_loading3(val));
  },
  rx_msglength: (val) => {
    dispatch(rx_msglength(val));
  },
  rx_msglength2: (val) => {
    dispatch(rx_msglength2(val));
  },
  rx_tabindex: (val) => {
    dispatch(rx_tabindex(val));
  },
  rx_all_my_msglength: (val) => {
    dispatch(rx_all_my_msglength(val));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
