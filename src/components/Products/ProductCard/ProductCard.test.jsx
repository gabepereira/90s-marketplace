import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductCard from './ProductCard';
import reducer from '../../../store/reducers';

describe('<ProductCard />', () => {
  const props = {
    data: {
      id: 0,
      name: 'product name',
      currency: '$',
      price: '1999.90',
      image: 'product image',
    },
  };

  const setup = () => {
    return render(
      <Router>
        <ProductCard {...props} />
      </Router>
    );
  };

  describe('Rendering', () => {
    it('should render the <ProductCard> component', () => {
      const { getByTestId } = setup();

      expect(getByTestId('ProductCard')).toBeInTheDocument();
    });
  });
});
