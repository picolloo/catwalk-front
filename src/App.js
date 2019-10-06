import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Container from "./components/Container";

import Home from "./pages/Home";
import Form from "./pages/Form";
import Market from "./pages/Market";

export default function App() {
  return (
    <>
      <Navbar />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:id" component={Market} />
            <Route path="/new" render={props => <Form {...props} />} />
            <Route path="/edit/:id" component={Form} />
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
}
