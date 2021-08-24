import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';

const PublicRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products/:id" component={ProductPage} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </Router>
  );
};

export default PublicRouter;
