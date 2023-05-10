import render from 'tests/render.js';

import { Dashboard } from '@terenceodonoghue/react-icons/velocity';

import ThemeProvider from '../../providers/ThemeProvider.js';
import NavItem from '../NavItem.js';

describe('NavItem', () => {
  it('has accessible elements', () => {
    const { screen } = render(<NavItem icon={Dashboard} label="Label" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('button')).toHaveAccessibleName('Label');
  });

  it('has visible text', () => {
    // Arrange
    const { screen } = render(<NavItem icon={Dashboard} label="Label" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByText('Label')).toBeVisible();
  });

  describe('when compact', () => {
    it('has hidden text', () => {
      // Arrange
      const { screen } = render(
        <NavItem compact icon={Dashboard} label="Label" />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByText('Label')).not.toBeVisible();
    });
  });
});
