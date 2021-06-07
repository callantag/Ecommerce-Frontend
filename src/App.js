import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./components/MainNav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductSingle from "./pages/ProductSingle";
import ProductCreate from "./pages/ProductCreate";
import AdminRoutes from "./components/AdminRoutes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApplicationProvider from "./contexts/ApplicationContext";

function App() {
  return (
    <div className="App">
      <ApplicationProvider>
        <Router>
          <MainNav />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/products/:id">
              <ProductSingle />
            </Route>

            <AdminRoutes path="/create/products" component={ProductCreate} />
          </Switch>
        </Router>
      </ApplicationProvider>
    </div>
  );
}

export default App;
