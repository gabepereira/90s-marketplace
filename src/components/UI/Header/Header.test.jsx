import { render } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  describe('Rendering', () => {
    it('should render the <Header> component', () => {
      const { getByTestId } = render(
          <Header />
      );

      expect(getByTestId('Header')).toBeInTheDocument();
    });
  });
});