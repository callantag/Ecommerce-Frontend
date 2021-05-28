import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <MainNav />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*" component={Page404} />
          </Switch>  
        </Router>
    </div>
  );
}

export default App;
