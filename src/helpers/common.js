import { fire, fireauth, firedatabase } from "../services/firebase";



//##########################################################
//########### 로그인 여부를 판단해주는 함수(firebase) ################
//##########################################################
export function CM_login_state(rx_authenticated) {
    fireauth.onAuthStateChanged((user) => {
      if (user) {
        //로그인상태---
        console.log("App/로그인", user);
        //#########################
        connected(true);
        rx_authenticated(true); //현재 로그인 여부 파악을 위한 값
        //#########################
      } else {
        //로그아웃상태---
        console.log("App/로그아웃", user);
        //#########################
        connected(false);
        rx_authenticated(false); //현재 로그인 여부 파악을 위한 값
        //#########################
      }
    });
};
//##########################################################


//##########################################################
//########### 실시간 접속여부 관련된 함수들 ################
//##########################################################
export function connected(authenticated) {
  if (authenticated === true) {
    var userUid = fireauth.currentUser.uid;
    var myConnectionsRef = firedatabase.ref(`UsersConnection/${userUid}`);
    var connectedRef = firedatabase.ref(".info/connected");
    connectedRef.on("value", (snap) => {
      if (snap.val() === true) {
        console.log("connected");
        myConnectionsRef.set({
          connection: true,
          uid: userUid,
        });
      } else {
        console.log("not connected");
        myConnectionsRef.set({
          connection: false,
          uid: userUid,
        });
      }
    });
    myConnectionsRef.onDisconnect().set({ connection: false, uid: userUid });
  }
}
//##########################################################


//##########################################################
//########### 로그인 유지 (브라우져 닫으면 로그인 유지 풀림) ################
//##########################################################
export function login_maintain(member) {
    console.log('member',member);
  fireauth
    .setPersistence(fire.auth.Auth.Persistence.SESSION)
    .then(() => {
      //로그인 유지 중
      console.log("로그인 유지 중");
      return fireauth.signInWithEmailAndPassword(member.email, member.password);
    })
    .catch((error) => {
      // Handle Errors here.
      console.log("로그인 유지 실패");

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
    });
};
//##########################################################


//##########################################################
//########### 유저 현재 접속 여부 확인을 위한 데이터 불러오기(firebase) ################
//##########################################################
export function CM_connectValue(rx_connected) {
  //firebase 에서 connect 안의 데이터전부를 불러와서 리덕스(rx_connected)에 넣어주기
  // console.log("fireauth.currentUser.uid", fireauth.currentUser.uid);
  firedatabase.ref(`UsersConnection`).on("value", (snapshot) => {
    console.log("sfajklas", Object.values(snapshot.val()));
    rx_connected(Object.values(snapshot.val()));  //리덕스에도 넣어주기
  });
}
//##########################################################


//##########################################################
//########### 유저 리스트 데이타를 불러오기(firebase) ################
//##########################################################
export function CM_all_users(rx_all_users,rx_me,me) {
    firedatabase.ref("all_users").on("value", (snapshot) => {
      let response = Object.values(snapshot.val());
      rx_all_users(response); //리덕스에도 넣어주기
      console.log("response", response);

      const me = response.filter((data) =>
        data.uid.includes(fireauth.currentUser.uid)
      );
      rx_me(me); //리덕스에도 넣어주기
      login_maintain(me[0]);
      console.log("me", me);
    });
};
//##########################################################


//##########################################################
//########### 전체 방 데이타를 불러오기(firebase) ################
//##########################################################
export function CM_allroomlist(rx_allroomlist,rx_myroomlist) {
    firedatabase.ref("room").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        let response = Object.values(snapshot.val());
        console.log("roomListBox", response);
        rx_allroomlist(response);

        const found = response.filter((element) =>
          element.uid.some((item) => item === fireauth.currentUser.uid)
        );
        rx_myroomlist(found);
        console.log("found", found);
      }
    });
};
//##########################################################


//##########################################################
//########### 메세지 리스트 데이타를 불러오기(firebase) ################
//##########################################################
export function CM_allmsglist(rx_allmsglist) {
    firedatabase.ref("msg").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        let response = snapshot.val();
          rx_allmsglist(response)
      }
    });
};
//##########################################################


//##########################################################
//########### 메시지 삭제(firebase) ################
//##########################################################
export const removeChats = (room, key, rx_remove) => {
  firedatabase.ref(`msg/${room}/${key}`).remove();
  rx_remove(key); //리덕스 스토어 데이터에도 삭제된 키값을 전달해줘서 삭제시켜준다.
  console.log("[메시지 삭제]removeChats", room, key);
}; //removeChats
//##########################################################


//##########################################################
//########### 메시지 서버로 보내기(firebase) ################
//##########################################################
export function sendChat(msg, focusroom) {
  if (focusroom !== "") {
    var newPostKey = firedatabase.ref(`msg/${focusroom}`).push().key;

    var postData = {
      message: msg.message,
      timestamp: msg.timestamp,
      uid: msg.uid,
      key: newPostKey,
      name: msg.name,
    };

    var updates = {};
    updates[`msg/${focusroom}/${newPostKey}`] = postData;
    return firedatabase.ref().update(updates);
  } else {
    alert("방을 선택해주세요");
  }
} //sendChat
//##########################################################


//##########################################################
//########### 이메일 로그인 함수 ################
//##########################################################
export function signIn(member) {
  return fireauth
    .signInWithEmailAndPassword(member.email, member.password)
    .then(() => {
      //dispatch({ type: "LOGIN_SUCCESS" });
      console.log("signIn()로그인성공");
    })
    .catch((err) => {
      //dispatch({ type: "LOGIN_ERROR", err });
      console.log("signIn()실패");
    });
}
//##########################################################


//##########################################################
//########### 회원가입 함수 ################
//##########################################################
export function signUp(member) {
  return fireauth
    .createUserWithEmailAndPassword(member.email, member.password)
    .then(() => {
      console.log("signUp()가입성공", member.email, member.password);
      // 여기는 별도 회원 데이터 저장하기 위한 기능
      var newPostKey = firedatabase.ref("all_users").push().key;
      var postData = {
        email: member.email,
        name: member.name,
        password: member.password,
        uid: fireauth.currentUser.uid,
        key: newPostKey,
      };
      var updates = {};
      updates["/all_users/" + newPostKey] = postData;
      return firedatabase.ref().update(updates);
      // //여기는 별도 회원 데이터 저장하기 위한 기능
    })
    .catch((error) => {
      alert(
        error.message ===
          "The email address is already in use by another account." &&
          "이미 있는 아이디입니다."
      );
    });
}