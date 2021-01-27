import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Typography } from '@material-ui/core'

import { auth } from "../../firebase";
import authentication from "../../services/authentication";
import EmptyState from "../EmptyState";
import { Item } from '../Item';

import { ReactComponent as CabinIllustration } from "../../illustrations/cabin.svg";
import { ReactComponent as InsertBlockIllustration } from "../../illustrations/insert-block.svg";

/*
const signInWithEmailLink = () => {
  const { user } = this.props;

  if (user) {
    return;
  }

  const emailLink = window.location.href;

  if (!emailLink) {
    return;
  }

  if (auth.isSignInWithEmailLink(emailLink)) {
    let emailAddress = localStorage.getItem("emailAddress");

    if (!emailAddress) {
      this.props.history.push("/");

      return;
    }

    authentication
      .signInWithEmailLink(emailAddress, emailLink)
      .then((value) => {
        const user = value.user;
        const displayName = user.displayName;
        const emailAddress = user.email;

        this.props.openSnackbar(
          `Signed in as ${displayName || emailAddress}`
        );
      })
      .catch((reason) => {
        const code = reason.code;
        const message = reason.message;

        switch (code) {
          case "auth/expired-action-code":
          case "auth/invalid-email":
          case "auth/user-disabled":
            this.props.openSnackbar(message);
            break;

          default:
            this.props.openSnackbar(message);
            return;
        }
      })
      .finally(() => {
        this.props.history.push("/");
      });
  }
};

const { user } = this.props;

return {

  if(user) {
    return (
      // <EmptyState
      //   image={<CabinIllustration />}
      //   title="Home"
      //   description="This is the home page. You can edit it from HomePage.js."
      // />

      <>
        <Item />
      </>
    );
  }

    componentDidMount() {
    this.signInWithEmailLink();
  }
*/
const HomePageView = () => {

  return (
    <EmptyState
      image={<InsertBlockIllustration />}
      title="RMUIF"
      description="Supercharged version of Create React App with all the bells and whistles."
    />
  );
}

const HomePage = withRouter(HomePageView);

export { HomePage };
