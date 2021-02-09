import React, { Component } from "react";

import PropTypes from "prop-types";

import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import { BoutiquePage } from "../../Pages/BoutiquePage";
import AdminPage from "../../Pages/AdminPage";
import UserPage from "../../Pages/UserPage";
import NotFoundPage from "../../Pages/NotFoundPage";
import { FeedPage } from "../../Pages/FeedPage/FeedPage";
import { mockItems } from "../../Modules/SquareItem";

class Router extends Component {
  render() {
    // Properties
    const { user, roles, bar } = this.props;

    // Functions
    const { openSnackbar } = this.props;

    return (
      <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
        {bar}

        <Switch>

          {/* TODO: become the feed */}
          <Route path="/" exact>
            <FeedPage items={mockItems} user={user} openSnackbar={openSnackbar} />
          </Route>

          <Route path="/feed" exact>
            <FeedPage user={user} openSnackbar={openSnackbar} />
          </Route>

          <Route path='/test' exact><div>
            <object type="text/html" data="http://validator.w3.org/" width="800px" height="600px" >
            </object>
          </div></Route>

          <Route path="/admin">
            {user && roles.includes("admin") ? (
              <AdminPage />
            ) : (
                <Redirect to="/" />
              )}
          </Route>

          {/* TODO: to be replaced by route below*/}
          <Route path="/users/JamesCharles">
            {user ? <BoutiquePage user={user} openSnackbar={openSnackbar} /> : <Redirect to="/" />}
          </Route>

          {/* TODO: to be switch out when database is wired*/}
          {/* <Route path="/user/:userId">
            {user ? <UserPage /> : <Redirect to="/" />}
          </Route> */}

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

Router.propTypes = {
  // Properties
  user: PropTypes.object,
  roles: PropTypes.array.isRequired,
  bar: PropTypes.element,

  // Functions
  openSnackbar: PropTypes.func.isRequired,
};

export default Router;
