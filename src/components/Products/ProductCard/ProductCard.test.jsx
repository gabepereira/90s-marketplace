import { render } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('<ProductCard />', () => {
  describe('Rendering', () => {
    it('should render the <ProductCard> component', () => {
      const { getByTestId } = render(<ProductCard />);

      expect(getByTestId('ProductCard')).toBeInTheDocument();
    });
  });
});
