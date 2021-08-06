const RX_AUTHENTICATED = "menu/RX_AUTHENTICATED";
const RX_ALL_USERS = "menu/RX_ALL_USERS";
const RX_ME = "menu/RX_ME";
const RX_CONNECTED = "menu/RX_CONNECTED";
const RX_MYROOMLIST = "menu/RX_MYROOMLIST";
const RX_ALLROOMLIST = "menu/RX_ALLROOMLIST";
const RX_MSGLIST = "menu/RX_MSGLIST";
const RX_REMOVE = "menu/RX_REMOVE";
const RX_FOCUSROOM = "menu/RX_FOCUSROOM";

export const rx_authenticated = (result) => ({
  type: RX_AUTHENTICATED,
  result,
});

export const rx_all_users = (result) => ({
  type: RX_ALL_USERS,
  result,
});

export const rx_me = (result) => ({
  type: RX_ME,
  result,
});

export const rx_connected = (result) => ({
  type: RX_CONNECTED,
  result,
});

export const rx_myroomlist = (result) => ({
  type: RX_MYROOMLIST,
  result,
});

export const rx_allroomlist = (result) => ({
  type: RX_ALLROOMLIST,
  result,
});

export const rx_msglist = (result) => ({
  type: RX_MSGLIST,
  result,
});

export const rx_remove = (key) => ({
  type: RX_REMOVE,
  key,
});

export const rx_focusroom = (result) => ({
  type: RX_FOCUSROOM,
  result,
});

const initialState = {
  authenticated: false,
  all_users: [],
  me: {},
  all_connected: "",
  myroomlist: [],
  allroomlist: [],
  msglist: [],
  focusroom: "",
};

function chats(state = initialState, action) {
  switch (action.type) {
    case RX_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.result,
      };
    case RX_ALL_USERS:
      return {
        ...state,
        all_users: action.result,
      };
    case RX_ME:
      return {
        ...state,
        me: action.result,
      };
    case RX_CONNECTED:
      return {
        ...state,
        all_connected: action.result,
      };
    case RX_MYROOMLIST:
      return {
        ...state,
        myroomlist: action.result,
      };
    case RX_ALLROOMLIST:
      return {
        ...state,
        // item.name.push(all_users.filter((data) => data.uid === item.uid)) 
        allroomlist: action.result,
      };
    case RX_MSGLIST:
      return {
        ...state,
        msglist: action.result,
      };
    case RX_REMOVE:
      return {
        ...state,
        msglist: state.msglist.filter((todo) => todo.key !== action.key),
      };
    case RX_FOCUSROOM:
      return {
        ...state,
        focusroom: action.result,
      };

    default:
      return state;
  }
}

export default chats;
