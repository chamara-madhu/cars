import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
// import Shop from "./pages/Shop";

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
        <Route path="/cars" exact component={Home} />
        {/* <Route path="/shop" exact component={Shop} /> */}
        <Route path="/:id" exact component={DetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
