import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  construcor(props) {
    super(props);
  }

  render() {
    return (
        <Router>
            <Switch>
                <Route path='/'><p>this is the Home page</p></Route>
            </Switch>
        </Router>
    ) ;
  }
}
