import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';

export default (jsx: ReactElement, options?: RenderOptions) => ({
  screen: render(jsx, options),
  user: userEvent.setup(),
});
