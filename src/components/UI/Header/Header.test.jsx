import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import reducer from '../../../store/reducers';

describe('<Header />', () => {
  const initialState = {
    cart: { products: [] },
  };

  const setup = () => {
    const store = createStore(reducer, initialState);
    return render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
  };

  describe('Rendering', () => {
    it('should render the <Header> component', () => {
      const { getByTestId } = setup();

      expect(getByTestId('Header')).toBeInTheDocument();
    });
  });
});
