import React, { BrowserRouter, Route, Switch, Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import axios from "axios";

axios.interceptors.request.use(
  
)

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
    );
  }
}

export default App;
