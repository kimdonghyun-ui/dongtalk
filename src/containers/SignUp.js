import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../helpers/common";
import { makeStyles } from "@material-ui/core/styles";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp() {
  const classes = useStyles();
  const [member, setMember] = useState({
    email: "",
    name: "",
    password: "",
    avatar:"",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };
console.log(member)
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (member.email !== "" && member.password !== "" && member.name !== "") {
      signUp(member);
    }
  };

function validateEmail(email){
    var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  return email.length > 0 ? emailReg.test(email) : true;
}
function validateName(name){
    var nameReg = new RegExp(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g);
  return name.length > 0 ? nameReg.test(name) : true;
}
function validatePassword(password){
    var passwordReg = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
  return password.length > 0 ? passwordReg.test(password) : true;
}



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          회원 가입
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={member.email}
                onChange={handleOnChange}
                error={!validateEmail(member.email)}
                helperText={ !validateEmail(member.email) && 'emali 형식에 맞게 입력해주세요.' }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                value={member.name}
                onChange={handleOnChange}
                error={!validateName(member.name)}
                helperText={ !validateName(member.name) && '한글만 입력해주세요.' }

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={member.password}
                onChange={handleOnChange}
                error={!validatePassword(member.password)}
                helperText={!validatePassword(member.password) && 'password는 최소 8 자, 최소 하나의 문자 및 하나의 숫자' }
              />
            </Grid>
            <Grid item xs={12}>
              <div>
                <FormLabel component="legend">Avatar</FormLabel>
                <RadioGroup aria-label="gender" name="avatar" value={member.avatar} onChange={handleOnChange} style={{ display:'flex',flexDirection:'row',justifyContent:'center' }}>
                  <FormControlLabel value="https://material-ui.com/static/images/avatar/1.jpg" control={<Radio />} label={<Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />} />
                  <FormControlLabel value="https://material-ui.com/static/images/avatar/2.jpg" control={<Radio />} label={<Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />} />
                  <FormControlLabel value="https://material-ui.com/static/images/avatar/3.jpg" control={<Radio />} label={<Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />} />
                </RadioGroup>
              </div>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            가입하기
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              이미 회원이신가?{" "}
              <Button component={Link} to="/login">
                로그인
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignUp
