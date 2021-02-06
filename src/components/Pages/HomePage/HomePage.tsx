import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { isEmpty } from 'lodash';

import { auth } from "../../../firebase";
import authentication from "../../../services/authentication";
import { EmptyState } from "../../Resources/EmptyState";

import { ReactComponent as InsertBlockIllustration } from "../../../illustrations/insert-block.svg";
import { ItemsGrid } from "../../Modules/ItemsGrid/ItemsGrid";
import { Container } from "@material-ui/core";
import { BoutiqueHeader, mockBoutiqueHeader } from "../../Modules/BoutiqueHeader";
import { mockItems } from "../../Modules/Item";

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
    /> : <>
      <BoutiqueHeader {...mockBoutiqueHeader}/>
      <ItemsGrid items={mockItems} /></>

  return <Container>
    {component}
  </Container>
}

const HomePage = withRouter(HomePageView);

export { HomePage };
