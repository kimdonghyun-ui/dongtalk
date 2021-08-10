import { fireauth, firedatabase } from "../services/firebase";




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





export const removeRooms = (key, me, rx_focusroom, rx_msglist) => {
  var mePassword = prompt("본인의 비밀번호를 입력하세요");
  if (me.password === mePassword) {
    firedatabase.ref(`room/${key}`).remove();
    firedatabase.ref(`msg/${key}`).remove();
    rx_focusroom("");
    rx_msglist("");
    alert("삭제가 완료되었습니다.");
  } else {
    alert("비밀번호가 틀려서 삭제 불가합니다");
  }
};

//##########################################################
//########### 실시간 접속여부 관련된 함수들 ################
//##########################################################

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
