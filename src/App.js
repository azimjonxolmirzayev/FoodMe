import "./components/i18next";
import Home from "./Layouts/Home";
import Demo from "./Layouts/Demo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/demo">
          <Demo />
        </Route>
        <Route>
          <h1>404 - Page Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
