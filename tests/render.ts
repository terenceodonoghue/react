import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';

export default (jsx: ReactElement) => ({
  screen,
  user: userEvent.setup(),
  ...render(jsx),
});
