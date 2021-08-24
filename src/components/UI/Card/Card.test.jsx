import { render } from '@testing-library/react';
import Card from './Card';

describe('<Card />', () => {
  describe('Rendering', () => {
    it('should render the <Card> component', () => {
      const { getByTestId } = render(<Card />);

      expect(getByTestId('Card')).toBeInTheDocument();
    });
  });
});
