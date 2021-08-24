import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from '../components/UI/Header';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';

const PublicRouter = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products/:id" component={ProductPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default PublicRouter;
