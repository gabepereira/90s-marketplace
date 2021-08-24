import { render } from '@testing-library/react';
import Logo from './Logo';

describe('<Logo />', () => {
  describe('Rendering', () => {
    it('should render the <Logo> component', () => {
      const { getByTestId } = render(<Logo />);

      expect(getByTestId('Logo')).toBeInTheDocument();
    });
  });
});
