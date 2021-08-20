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
export function CM_all_users(rx_all_users, rx_me, rx_loading1) {
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
      rx_loading1(false);
    });
};
//##########################################################


//##########################################################
//########### 전체 방 데이타를 불러오기(firebase) ################
//##########################################################
export function CM_allroomlist(rx_allroomlist,rx_myroomlist,rx_loading2) {
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
    } else {
      console.log('else')
      rx_allroomlist([]);
      rx_myroomlist([]);
    }
      rx_loading2(false);
    });
};
//##########################################################


//##########################################################
//########### 메세지 리스트 데이타를 불러오기(firebase) ################
//##########################################################
export function CM_allmsglist(rx_allmsglist,rx_loading3) {
    firedatabase.ref("msg").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        let response = snapshot.val();
        rx_allmsglist(response);
      }
      rx_loading3(false);
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
      avatar: msg.avatar,
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
        avatar: member.avatar,
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
};
//##########################################################

//##########################################################
//########### 로그아웃 ################
//##########################################################
export function CM_logout() {
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
};
//##########################################################


//##########################################################
//########### 내 룸 개설 ################
//##########################################################
export function CM_Roomadd(me,you,allroomlist) {
    const data = [me.uid, you];
    const clone_data = [me.uid, you].sort();
    console.log("handleFriend", data[0], data[1]);

    console.log(allroomlist);
    let clone_allroomlist = JSON.parse(JSON.stringify(allroomlist));
    clone_allroomlist = clone_allroomlist.some(
      (element) =>
        JSON.stringify(element.uid.sort()) === JSON.stringify(clone_data)
    );

    if (!clone_allroomlist) {
      var newPostKey = firedatabase.ref("room").push().key;
      var postData = {
        uid: [me.uid, you],
        name: [],
        avatar:me.avatar,
        msg_key: newPostKey,
      };
      var updates = {};
      updates["/room/" + newPostKey] = postData;
      return firedatabase.ref().update(updates);
    } else {
      alert("이미 방이 존재합니다.");
    }
};
//##########################################################


//##########################################################
//########### 내 룸 리스트 삭제 ################
//##########################################################
export const CM_removeRooms = (key, me, rx_focusroom, rx_focusmsg,all_users) => {
  var mePassword = prompt("본인의 비밀번호를 입력하세요");
  if (me.password === mePassword) {
    firedatabase.ref(`room/${key}`).remove();
    firedatabase.ref(`msg/${key}`).remove();
    firedatabase.ref(`msgLength/${key}`).remove();
    all_users.map((item) => firedatabase.ref(`msgLength2/${item.uid}/${key}`).remove() )
    
    rx_focusroom("");
    rx_focusmsg([]);
    alert("삭제가 완료되었습니다.");
  } else {
    alert("비밀번호가 틀려서 삭제 불가합니다");
  }
};
//##########################################################


//##########################################################
//########### 실시간 접속 여부를 화면단에 뿌려줄때 사용 ################
//##########################################################
export function CM_me_connected(all_connected, uid) {
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
};
//##########################################################



//구글 로그인 기능(사용안함 중)
export function signInWithGoogle() {
  const provider = new fire.auth.GoogleAuthProvider();
  // provider.setCustomParameters({ prompt: 'select_account' });
  return fireauth.signInWithPopup(provider);
}





export function CM_msgLength(allmsglist,allroomlist,rx_msglength) {
  let hello1 = Object.keys(allmsglist);
  let hello2 = Object.values(allmsglist).map((item) => Object.values(item) );
  console.log('까꿍꿍꿍꿍꿍꿍꿍123',allmsglist)
  console.log('까꿍꿍꿍꿍꿍꿍꿍123',Object.entries(allmsglist))
  console.log('까꿍꿍꿍꿍꿍꿍꿍123', hello2)

  allroomlist.map((item,index) => 
    firedatabase.ref(`msgLength/${item.msg_key}`).set(
       allmsglist[item.msg_key] ? Object.values(allmsglist[item.msg_key]).length : 0
    )
  )
  firedatabase.ref('msgLength').once('value').then((snapshot) => {
    console.log(snapshot.val())
    rx_msglength(snapshot.val())
  });

  // hello2.map((item,index) => 
  //   firedatabase.ref(`msgLength/${hello1[index]}`).set(
  //       item.length
  //   )
  // )
}





export function CM_user_msgLength(allroomlist, rx_msglength2, all_users) {
  console.log('CM_user_msgLength')

  firedatabase.ref(`msgLength2`).once('value').then((snapshot) => {
    let response = snapshot.val();
    
    if (response) {
      console.log(response['2K13LFWW5kNaThUcjkSjPZKgVKp2']['-MhWIcgclx-ZglR0SRsr'])

      all_users.map((item) =>
        allroomlist.map((item2) =>
          !response[item.uid][item2.msg_key] && firedatabase.ref(`msgLength2/${item.uid}/${item2.msg_key}`).set(0)
        )
      )

    } else {
      all_users.map((item) =>
        allroomlist.map((item2) =>
          firedatabase.ref(`msgLength2/${item.uid}`).update({ [item2.msg_key] : 0 })
        )
      )
    }

  firedatabase.ref(`msgLength2`).once('value').then((snapshot) => {
    let response = snapshot.val();
    
rx_msglength2(response)
    
  });

    
  });




}
