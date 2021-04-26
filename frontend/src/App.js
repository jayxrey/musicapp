import React, { BrowserRouter, Route, Switch, Component, Fragment } from "react";
import Home from "./components/Home";
import axios from "axios";

axios.interceptors.request.use(
  
)

class App extends Component {
  render() {
    return (
        <Home />
    );
  }
}

export default App;
