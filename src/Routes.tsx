import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/home';
import CepSearch from 'pages/GitSearch/gitSearch';
import Navbar from 'components/Navbar/navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/gitsearch">
        <CepSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
