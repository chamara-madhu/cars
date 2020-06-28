import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";

// // load isAuthenticated method
// import { isAuthenticated } from "./auth/auth";

// // create a private route for customers
// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       )
//     }
//   />
// );

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
