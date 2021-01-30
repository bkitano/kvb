import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { isEmpty } from 'lodash';

import { auth } from "../../../firebase";
import authentication from "../../../services/authentication";
import { EmptyState } from "../../EmptyState";

import { ReactComponent as InsertBlockIllustration } from "../../../illustrations/insert-block.svg";
import { ItemsPage } from "../ItemsPage/ItemsPage";
import { Container } from "@material-ui/core";

const signInWithEmailLink = (props) => {
  const { user } = props;

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
      props.history.push("/");

      return;
    }

    authentication
      .signInWithEmailLink(emailAddress, emailLink)
      .then((value) => {
        const user = value.user;
        const displayName = user.displayName;
        const emailAddress = user.email;

        props.openSnackbar(
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
            props.openSnackbar(message);
            break;

          default:
            props.openSnackbar(message);
            return;
        }
      })
      .finally(() => {
        props.history.push("/");
      });
  }
};

const HomePageView = (props: any) => {
  const { user } = props;

  useEffect(() => {
    signInWithEmailLink(props)
  })

  const component = isEmpty(user) ?
    <EmptyState
      image={<InsertBlockIllustration />}
      title="RMUIF"
      description="Supercharged version of Create React App with all the bells and whistles."
    /> : <ItemsPage items={[
      {
        name: 'asdf',
        price: 30,
        image: 'https://ak.picdn.net/shutterstock/videos/19990843/thumb/1.jpg'
      },
      {
        name: 'asdf',
        price: 30,
        image: 'https://ak.picdn.net/shutterstock/videos/19990843/thumb/2.jpg'
      },
      {
        name: 'asdf',
        price: 30,
        image: 'https://ak.picdn.net/shutterstock/videos/19990843/thumb/3.jpg'
      },
    ]} />

  return <Container>

    {component}
  </Container>
}

const HomePage = withRouter(HomePageView);

export { HomePage };
