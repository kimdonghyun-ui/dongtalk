import { fireauth, firedatabase } from "../services/firebase";

//회원가입 함수
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

//이메일 로그인 함수
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

//로그아웃
export function logout() {
  firedatabase.ref(`UsersConnection/${fireauth.currentUser.uid}`).set({
    connection: false,
    uid: fireauth.currentUser.uid,
  });
  return fireauth
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log("로그아웃 성공");
    })
    .catch((error) => {
      // An error happened.
      console.log("로그아웃 실패");
    });
}

//##### 메시지 보내기 #####
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

//##### 메시지 삭제 #####
export const removeChats = (room, key, rx_remove) => {
  firedatabase.ref(`msg/${room}/${key}`).remove();
  rx_remove(key);
  console.log("메롱", room, key);
}; //removeChats


export const removeRooms = (key, me) => {
  var mePassword = prompt("본인의 비밀번호를 입력하세요");
  if (me.password === mePassword) {
    firedatabase.ref(`room/${key}`).remove();
    alert("삭제가 완료되었습니다.");
  } else {
    alert("비밀번호가 틀려서 삭제 불가합니다");
  }
};


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

export function connectValue(rx_connected) {
  //firebase 에서 connect 안의 데이터전부를 불러와서 리덕스(rx_connected)에 넣어주기
  // console.log("fireauth.currentUser.uid", fireauth.currentUser.uid);
  firedatabase.ref(`UsersConnection`).on("value", (snapshot) => {
    console.log("sfajklas", Object.values(snapshot.val()));
    rx_connected(Object.values(snapshot.val()));
  });
}

export function me_connected(all_connected, uid) {
  //실제 화면단 포문 도는곳에
  //all_connected:리덕스의 all_connected 를 넣어주고
  //uid:리덕의 all_users가 포문 돌면서 하나하나 접근할때 있는 uid값
  if (all_connected !== "") {
    // console.log("######################################");
    // console.log("all_connected", all_connected);
    // console.log("uid", uid);
    const found = all_connected.filter((element) => element.uid === uid);
    // console.log(
    //   "foundfoundfoundfoundfoundfoundfoundfoundfoundfoundfoundfound",
    //   found
    // );
    return found.length > 0 && found[0].connection;
  }
}









