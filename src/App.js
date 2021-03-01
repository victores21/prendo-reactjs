import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/User/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={Login} />
      </Switch>
    </>
  );
}

export default App;
