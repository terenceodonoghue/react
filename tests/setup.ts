import matchers from '@testing-library/jest-dom/matchers';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { expect } from 'vitest';

expect.extend(matchers);

export default (jsx: ReactElement) => ({
  user: userEvent.setup(),
  ...render(jsx),
});
