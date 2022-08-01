import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Index from "./views/Index";
import { HomeContext } from "oncontext/OnLandingContext";
import { AboutProvider } from "./oncontext/aboutContext/onAboutContext";
import { ContactProvider } from "./oncontext/contactContext/onContactContext";

ReactDOM.render(
  <BrowserRouter>
    <AboutProvider>
      <HomeContext>
        <ContactProvider>
          <Switch>
            {/* add routes with layouts */}
            <Route path="/admin" component={Admin} />
            <Route path="/auth" component={Auth} />
            {/* add routes without layouts */}
            <Route path="/ABOUTUS" exact component={Landing} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/" exact component={Index} />
            {/* add redirect for first page */}
            <Redirect from="*" to="/" />
          </Switch>
        </ContactProvider>
      </HomeContext>
    </AboutProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
