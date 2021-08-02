import { fireauth, firedatabase, fire } from "../services/firebase";

/* 로그인 유지 (브라우져 닫으면 로그인 유지 풀림) */
export function login_maintain(member) {
  console.log(member);
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

//구글 로그인 기능
export function signInWithGoogle() {
  const provider = new fire.auth.GoogleAuthProvider();
  // provider.setCustomParameters({ prompt: 'select_account' });
  return fireauth.signInWithPopup(provider);
}

//로그아웃
export function logout() {
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

//회원가입 함수
export function signUp(member, all_users) {
  return fireauth
    .createUserWithEmailAndPassword(member.email, member.password)
    .then(() => {
      console.log("signUp()가입성공", member.email, member.password);
      all_users(member);
    })
    .catch((error) => {
      alert(
        error.message ===
          "The email address is already in use by another account." &&
          "이미 있는 아이디입니다."
      );
    });
}

//전체 회원 불러오기가 안되서 따로 회원 관리하기 위한용도로 만든 회원데이터
export function all_users(member) {
  return firedatabase
    .ref("all_users")
    .push({
      email: member.email,
      name: member.name,
      password: member.password,
      uid: fireauth.currentUser.uid,
    })
    .then(() => {
      console.log(
        "all_users()데이터 추가 완료",
        member.email,
        member.name,
        member.password,
        fireauth.currentUser.uid
      );
    })
    .catch((error) => {
      console.log("all_users()실패");
    });
}
