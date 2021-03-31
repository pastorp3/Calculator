import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Quote from './Qoute/Qoute';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/app" component={App} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
