const RX_AUTHENTICATED = "menu/RX_AUTHENTICATED";
const RX_ALL_USERS = "menu/RX_ALL_USERS";
const RX_ME = "menu/RX_ME";
const RX_CONNECTED = "menu/RX_CONNECTED";
const RX_MYROOMLIST = "menu/RX_MYROOMLIST";
const RX_ALLROOMLIST = "menu/RX_ALLROOMLIST";
const RX_ALLMSGLIST = "menu/RX_ALLMSGLIST";
const RX_FOCUSMSG = "menu/RX_FOCUSMSG";
const RX_REMOVE = "menu/RX_REMOVE";
const RX_FOCUSROOM = "menu/RX_FOCUSROOM";
const RX_LOADING1 = "menu/RX_LOADING1";
const RX_LOADING2 = "menu/RX_LOADING2";
const RX_LOADING3 = "menu/RX_LOADING3";

const RX_MSGLENGTH = "menu/RX_MSGLENGTH";
const RX_MSGLENGTH2 = "menu/RX_MSGLENGTH2";



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

export const rx_allmsglist = (result) => ({
  type: RX_ALLMSGLIST,
  result,
});

export const rx_focusmsg = (result) => ({
  type: RX_FOCUSMSG,
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

export const rx_loading1 = (result) => ({
  type: RX_LOADING1,
  result,
});
export const rx_loading2 = (result) => ({
  type: RX_LOADING2,
  result,
});
export const rx_loading3 = (result) => ({
  type: RX_LOADING3,
  result,
});

export const rx_msglength = (result) => ({
  type: RX_MSGLENGTH,
  result,
});
export const rx_msglength2 = (result) => ({
  type: RX_MSGLENGTH2,
  result,
});



const initialState = {
  authenticated: false,
  all_users: [],
  me: {},
  all_connected: "",
  myroomlist: [],
  allroomlist: [],
  allmsglist: [],
  focusmsg: [],
  focusroom: "",
  loading1:false,
  loading2:false,
  loading3: false,
  msglength:[],
  msglength2:[],
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
    case RX_ALLMSGLIST:
      return {
        ...state,
        allmsglist: action.result,
      };
    case RX_FOCUSMSG:
      return {
        ...state,
        focusmsg: action.result,
      };
    case RX_REMOVE:
      return {
        ...state,
        focusmsg: state.focusmsg.filter((todo) => todo.key !== action.key),
      };
    case RX_FOCUSROOM:
      return {
        ...state,
        focusroom: action.result,
      };
    case RX_LOADING1:
      return {
        ...state,
        loading1: action.result,
      };
    case RX_LOADING2:
      return {
        ...state,
        loading2: action.result,
      };
    case RX_LOADING3:
      return {
        ...state,
        loading3: action.result,
      };

    case RX_MSGLENGTH:
      return {
        ...state,
        msglength: action.result,
      };
    case RX_MSGLENGTH2:
      return {
        ...state,
        msglength2: action.result,
      };
    
    
    default:
      return state;
  }
}

export default chats;
