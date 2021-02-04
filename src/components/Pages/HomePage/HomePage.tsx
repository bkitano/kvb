import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { isEmpty } from 'lodash';

import { auth } from "../../../firebase";
import authentication from "../../../services/authentication";
import { EmptyState } from "../../Resources/EmptyState";

import { ReactComponent as InsertBlockIllustration } from "../../../illustrations/insert-block.svg";
import { ItemsPage } from "../ItemsPage/ItemsPage";
import { Container } from "@material-ui/core";
import { BoutiqueHeader } from "../../Modules/BoutiqueHeader";

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
      <BoutiqueHeader name='James Charles' image='https://www.macworld.co.uk/cmsdata/features/3792765/apple_logo_thumb1200_4-3.jpg' />
      <ItemsPage items={[
        {
          link: 'https://www.amazon.com/gp/product/B085H7ZLNQ?pf_rd_r=8XZ38WY8RAY91AN7GCG3&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8&pd_rd_r=319cb99a-87ad-430e-b5bd-a6ee1bda9b2a&pd_rd_w=Yn9v2&pd_rd_wg=gW4b2&ref_=pd_gw_unk',
          name: 'asdf',
          // price: 30,
          image: 'https://ak.picdn.net/shutterstock/videos/19990843/thumb/1.jpg'
        },
        {
          link: 'https://www.amazon.com/gp/product/B085H7ZLNQ?pf_rd_r=8XZ38WY8RAY91AN7GCG3&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8&pd_rd_r=319cb99a-87ad-430e-b5bd-a6ee1bda9b2a&pd_rd_w=Yn9v2&pd_rd_wg=gW4b2&ref_=pd_gw_unk',
          name: 'asdf',
          // price: 30,
          image: 'https://ak.picdn.net/shutterstock/videos/19990843/thumb/2.jpg'
        },
        {
          link: 'https://www.amazon.com/gp/product/B085H7ZLNQ?pf_rd_r=8XZ38WY8RAY91AN7GCG3&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8&pd_rd_r=319cb99a-87ad-430e-b5bd-a6ee1bda9b2a&pd_rd_w=Yn9v2&pd_rd_wg=gW4b2&ref_=pd_gw_unk',
          name: 'asdf',
          // price: 30,
          image: 'https://ak.picdn.net/shutterstock/videos/19990843/thumb/3.jpg'
        },
      ]} /></>

  return <Container>

    {component}
  </Container>
}

const HomePage = withRouter(HomePageView);

export { HomePage };
