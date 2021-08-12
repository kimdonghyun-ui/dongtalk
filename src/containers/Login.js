import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { signIn } from "../helpers/common";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  CssBaseline,
  Container,
} from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Button component={Link} to="https://material-ui.com/">
        Your Website
      </Button>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();
  const [member, setMember] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (member.email !== "" && member.password !== "") {
      signIn(member);
    }
  };

function validateEmail(email){
    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  return email.length > 0 ? emailReg.test(email) : true;
}
// function validatePassword(password){
//     var passwordReg = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$");
//   return password.length > 0 ? passwordReg.test(password) : true;
// }


  // const handleGoogleSignIn = async () => {
  //   try {
  //     await signInWithGoogle();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <form className={classes.form} onSubmit={handleOnSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일을 입력하세요."
            name="email"
            autoComplete="email"
            autoFocus
            value={member.email}
            onChange={handleOnChange}
            error={!validateEmail(member.email)}
            helperText={ !validateEmail(member.email) && 'emali 제대로 입력해주세요.' }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={member.password}
            onChange={handleOnChange}
            error={false}
            helperText={false && 'password는 최소 8 자, 최소 하나의 문자 및 하나의 숫자' }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          {/* <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleGoogleSignIn}
            className={classes.submit}
          >
            구글 로그인
          </Button> */}
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              <Button component={Link} to="/signup">
                {"회원가입"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default Login;
