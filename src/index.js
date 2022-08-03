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
import { ProductProvider } from "./oncontext/productContext/onProductContext";
import Product from "./views/Products";
import ProductDetails from "./views/ProductDetails";
import { EcomProvider } from "./oncontext/productContext/onEcomContext";

ReactDOM.render(
  <BrowserRouter>
    <AboutProvider>
      <HomeContext>
        <ContactProvider>
          <ProductProvider>
            <EcomProvider>
              <Switch>
                {/* add routes with layouts */}
                <Route path="/admin" component={Admin} />
                <Route path="/auth" component={Auth} />
                {/* add routes without layouts */}
                <Route path="/ABOUTUS" exact component={Landing} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/products" component={Product} />
                <Route path="/productsid" component={ProductDetails} />
                <Route path="/" exact component={Index} />
                {/* add redirect for first page */}
                <Redirect from="*" to="/" />
              </Switch>
            </EcomProvider>
          </ProductProvider>
        </ContactProvider>
      </HomeContext>
    </AboutProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
