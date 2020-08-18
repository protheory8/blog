import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

function App() {
    return (
        <Router basename="/blog">
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/posts">
                    <Posts />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
