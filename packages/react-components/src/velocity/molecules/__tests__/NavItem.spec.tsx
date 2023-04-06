import { rgba } from 'polished';
import render from 'tests/render.js';

import { Dashboard } from '@terenceodonoghue/react-icons/velocity';

import ThemeProvider, { defaultTheme } from '../../providers/ThemeProvider.js';
import NavItem from '../NavItem.js';

describe('NavItem', () => {
  it('has default style', () => {
    // Arrange
    const { screen } = render(<NavItem icon={Dashboard} label="Label" />, {
      wrapper: ThemeProvider,
    });

    // Assert
    expect(screen.getByRole('listitem')).toHaveStyle({
      boxShadow: '',
      backgroundColor: '',
      width: '100%',
    });

    expect(screen.getByText('Label')).toHaveStyle({
      color: defaultTheme.color.neutral[500],
      opacity: 1,
    });
  });

  describe('with label', () => {
    it('has visible text', () => {
      // Arrange
      const { screen } = render(<NavItem icon={Dashboard} label="Label" />, {
        wrapper: ThemeProvider,
      });

      // Assert
      expect(screen.getByText('Label')).toBeVisible();
    });

    describe('with compact', () => {
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

    describe('with selected', () => {
      it('has color', () => {
        // Arrange
        const { screen } = render(
          <NavItem icon={Dashboard} label="Label" selected />,
          {
            wrapper: ThemeProvider,
          },
        );

        // Assert
        expect(screen.getByText('Label')).toHaveStyle({
          color: defaultTheme.color.primary,
        });
      });
    });
  });

  describe('with compact', () => {
    it('has compact width', () => {
      // Arrange
      const { screen } = render(
        <NavItem compact icon={Dashboard} label="Label" />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('listitem')).toHaveStyle({
        width: '80px',
      });
    });
  });

  describe('with selected', () => {
    it('has selected style', () => {
      // Arrange
      const { screen } = render(
        <NavItem icon={Dashboard} label="Label" selected />,
        {
          wrapper: ThemeProvider,
        },
      );

      // Assert
      expect(screen.getByRole('listitem')).toHaveStyle({
        boxShadow: `inset 4px 0 0 -1px ${defaultTheme.color.primary}`,
        backgroundColor: rgba(defaultTheme.color.primary, 0.1),
      });
    });
  });
});
