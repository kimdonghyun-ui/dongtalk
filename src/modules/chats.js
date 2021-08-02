const RX_AUTHENTICATED = "menu/RX_AUTHENTICATED";
const RX_SETUSERS = "menu/RX_SETUSERS";
const RX_ME = "menu/RX_ME";
const RX_CONNECTED = "menu/RX_CONNECTED";
const RX_ROOMLISTBOX = "menu/RX_ROOMLISTBOX";
const RX_MSGLIST = "menu/RX_MSGLIST";
const RX_REMOVE = "menu/RX_REMOVE";
const RX_FOCUSROOM = "menu/RX_FOCUSROOM";

export const rx_authenticated = (result) => ({
  type: RX_AUTHENTICATED,
  result,
});

export const rx_setusers = (result) => ({
  type: RX_SETUSERS,
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

export const rx_roomlistbox = (result) => ({
  type: RX_ROOMLISTBOX,
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
  my_room_list: [],
  msg_list: [],
  focusroom: "",
};

function chats(state = initialState, action) {
  switch (action.type) {
    case RX_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.result,
      };
    case RX_SETUSERS:
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
    case RX_ROOMLISTBOX:
      return {
        ...state,
        my_room_list: action.result,
      };
    case RX_MSGLIST:
      return {
        ...state,
        msg_list: action.result,
      };
    case RX_REMOVE:
      return {
        ...state,
        msg_list: state.msg_list.filter((todo) => todo.key !== action.key),
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
