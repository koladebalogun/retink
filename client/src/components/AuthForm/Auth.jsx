import React, { useState } from "react";
import { Avatar, Typography, Button, Paper, Grid, Container } from "@material-ui/core";
import { useNavigate } from "react-router";

import { GoogleLogin } from "react-google-login"; //This import is for the google o-authentication (openAuthorization)
import { useDispatch } from 'react-redux'

import Icon from './icon';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import { signin, signup } from '../../actions/auth';


const initialState = { 
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const Auth = () => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData ] = useState(initialState); 
  const dispatch = useDispatch();
  const navigate = useNavigate();


  
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword); 
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    if (isSignup) {
      dispatch(signup(formData, navigate )); 

    } else {
      dispatch(signin(formData, navigate ));
    }
  };


  const handleChange = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false); 
  };



  const googleSuccess = async (res) => { 
    const result = res?.profileObj; 
    
    const token = res?.tokenId;    

    try {
        dispatch({ type: 'AUTH', data: { result, token }});

        navigate('/');
    } catch (error) {
        console.log(error);
    }
  };



  const googleFailure = (error) => {
      console.log(error)
    console.log('Google Sign In was unsuccessful, Try again')
  };



  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  autoFocus
                  half
                  handleChange={handleChange}
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  half
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              type="email"
              handleChange={handleChange}
            />
            <Input
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
            />

            {/** password confirmation field that would only show if we are on the signup form */}
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In "}
          </Button>

          {/* GOOGLE-LOGIN-AUTHENTICATION */}

          <GoogleLogin
            clientId="993419251326-st6e1dfmh7siqkuc0r6rfrc6ql31of2r.apps.googleusercontent.com"
            render={( renderProps  ) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              > 
              Google Sign In 
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />

          {/* creating a button that will allow us switch from SignUp to Sign in */}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up "}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;

