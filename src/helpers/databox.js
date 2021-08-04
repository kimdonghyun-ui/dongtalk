import { fireauth, firedatabase, fire } from "../services/firebase";

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








// export function roomPush(all_users, me, you, rx_focusroom, rx_msglist) {
//   var newPostKey = firedatabase.ref("room").push().key;
//   rx_focusroom(newPostKey);
//   getMsg(newPostKey, rx_msglist);
//   var postData = {
//     user_uid: [me, you],
//     name: [
//       nameFilter(all_users, me)[0].name,
//       nameFilter(all_users, you)[0].name,
//     ],
//     msg_key: newPostKey,
//   };

//   var updates = {};
//   updates["/room/" + newPostKey] = postData;
//   return firedatabase.ref().update(updates);
// }





// export function roomOpen() {
//   firedatabase
//     .ref("room")
//     .once("value")
//     .then((snapshot) => {
//       if (snapshot.val() === null) {
//         console.log("room에 데이터가 null인경우");
//         //roomPush(all_users, me, you, rx_focusroom, rx_msglist);
//       } else if (me === you) {
//         console.log("me === you 즉 내가 나를 클릭한경우");
//         let response = Object.values(snapshot.val());
//         const found = response.filter(
//           (element) => element.user_uid[0] === me && element.user_uid[1] === you
//         );
//         found.length === 0 &&
//           //roomPush(all_users, me, you, rx_focusroom, rx_msglist); //동일한 방 열리는거 방지용
//       } else {
//         console.log("방생성");

//         console.log("once1", snapshot.val());
//         console.log("once2", Object.values(snapshot.val()));

//         function findMe(element) {
//           if (element === me) {
//             return true;
//           }
//         }
//         function findYou(element) {
//           if (element === you) {
//             return true;
//           }
//         }

//         let response = Object.values(snapshot.val());

//         const found = response
//           .filter((element) => element.user_uid.some(findMe))
//           .filter((element) => element.user_uid.some(findYou));
//         found.length === 0 &&
//           roomPush(all_users, me, you, rx_focusroom, rx_msglist);
//       }
//     }); //firedatabase
// };






// export function roomCheck(all_users, me, you, rx_focusroom, rx_msglist) {
//   console.log("all_users", all_users);
//   console.log("me", me);
//   console.log("you", you);

//   firedatabase
//     .ref("room")
//     .once("value")
//     .then((snapshot) => {
//       if (snapshot.val() === null) {
//         console.log("room에 데이터가 null인경우");
//         //roomPush(all_users, me, you, rx_focusroom, rx_msglist);
//       } else if (me === you) {
//         console.log("me === you 즉 내가 나를 클릭한경우");
//         let response = Object.values(snapshot.val());
//         const found = response.filter(
//           (element) => element.user_uid[0] === me && element.user_uid[1] === you
//         );
//         found.length === 0 &&
//           //roomPush(all_users, me, you, rx_focusroom, rx_msglist); //동일한 방 열리는거 방지용
//       } else {
//         console.log("방생성");

//         console.log("once1", snapshot.val());
//         console.log("once2", Object.values(snapshot.val()));

//         function findMe(element) {
//           if (element === me) {
//             return true;
//           }
//         }
//         function findYou(element) {
//           if (element === you) {
//             return true;
//           }
//         }

//         let response = Object.values(snapshot.val());

//         const found = response
//           .filter((element) => element.user_uid.some(findMe))
//           .filter((element) => element.user_uid.some(findYou));
//         found.length === 0 &&
//           roomPush(all_users, me, you, rx_focusroom, rx_msglist);
//       }
//     }); //firedatabase
// } //roomCheck