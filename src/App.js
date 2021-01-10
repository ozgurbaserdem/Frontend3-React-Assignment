import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CustomerListPage from "./pages/CustomerListPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import CustomerCreatePage from "./pages/CustomerCreatePage";
import CustomerUpdatePage from "./pages/CustomerUpdatePage";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/customers/create">Create Customer</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/customers/create">
          <CustomerCreatePage />
        </Route>
        <Route path="/customers/:id/edit" component={CustomerUpdatePage} />
        <Route path="/customers/:id" component={CustomerDetailPage} />
        <Route path="/customers">
          <CustomerListPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
