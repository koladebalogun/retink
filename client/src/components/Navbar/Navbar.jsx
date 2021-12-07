import React, { useState, useEffect } from "react";
import vector from "../../asset/R.png";
import Retink from "../../asset/Retink.png";
import circle from "../../asset/circle.png";
import { Link } from "react-router-dom";
import { Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import gsap from 'gsap';


import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";

import decode from "jwt-decode";
import useStyles from "./styles";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();

  const bannerTl = gsap.timeline()

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile"))); //Here, we are retrieving the user data ('profile') set in the local storage

  console.log(user);

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate("/");

    setUser(null);
  };

  useEffect(() => {
    bannerTl.from(['.navigation'],{
      delay:1,
      opacity:0,
      y: -80,
      duration: .8,
      ease: "Power3.out",
      stagger:{
        amount:0.2
      }
    })

  }, [])

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="navigation">
      <div className="nav-logo">
        <img src={vector} alt="logo" />
        <Link to="/">
          <img src={Retink} alt="logo" />
        </Link>
        <div className="circle">
          <img src={circle} alt="" />
        </div>
      </div>

      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/aboutus">
            <li>About Us</li>
          </Link>
        </ul>
      </nav>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>{" "}
            {/* this is used to show the first character of the users name incase the user doesn't have an image*/}
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Log Out
            </Button>
          </div>
        ) : (
          //Writing a conditional to show something if the user is logged in and show something else if the user is not logged in
          // so if the user is logged in, we want to show the users info e.g the users avatar
          <Button
            variant="contained"
            component={Link}
            to="/auth"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </div>
  );
};

export default Navbar;
