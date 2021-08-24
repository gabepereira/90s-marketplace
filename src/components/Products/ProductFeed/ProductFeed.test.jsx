import { render } from '@testing-library/react';
import ProductFeed from './ProductFeed';

describe('<ProductFeed />', () => {
  describe('Rendering', () => {
    it('should render the <ProductFeed> component', () => {
      const { getByTestId } = render(<ProductFeed />);

      expect(getByTestId('ProductFeed')).toBeInTheDocument();
    });
  });
});
