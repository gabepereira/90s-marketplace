import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductFeed from './ProductFeed';
import reducer from '../../../store/reducers';

describe('<ProductFeed />', () => {
  const initialState = {
    cart: { products: [] },
  };

  const setup = () => {
    const store = createStore(reducer, initialState);
    return render(
      <Provider store={store}>
        <Router>
          <ProductFeed />
        </Router>
      </Provider>
    );
  };

  describe('Rendering', () => {
    it('should render the <ProductFeed> component', () => {
      const { getByTestId } = setup();

      expect(getByTestId('ProductFeed')).toBeInTheDocument();
    });
  });
});
