import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';

export default (jsx: ReactElement) => ({
  screen: render(jsx),
  user: userEvent.setup(),
});
