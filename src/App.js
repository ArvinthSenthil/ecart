import "./App.css";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/Homescreen";
import Productscreen from "./screens/productscreen";
import Cartscreen from "./screens/Cartscreen";
import { Container } from "react-bootstrap";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/RegisterScreen";
import Profilescreen from "./screens/Profilescreen";
import Shippingscreen from "./screens/Shippingscreen";
import Paymentscreen from "./screens/Paymentscreen";
import Placeorderscreen from "./screens/Placeorderscreen";
import Orderscreen from "./screens/Orderscreen";
export default function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/products/:id">
              <Productscreen />
            </Route>
            <Route path="/cart/:id?">
              <Cartscreen />
            </Route>
            <Route exact path="/login">
              <Loginscreen />
            </Route>
            <Route path="/register">
              <Registerscreen />
            </Route>
            <Route path="/profile">
              <Profilescreen />
            </Route>
            <Route path="/shipping">
              <Shippingscreen />
            </Route>
            <Route path="/payment">
              <Paymentscreen />
            </Route>
            <Route path="/placeorder">
              <Placeorderscreen />
            </Route>
            <Route path="/order/:id">
              <Orderscreen />
            </Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </>
  );
}
