import facepaint from 'facepaint';

import breakpoints from './breakpoints';

const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`),
  { overlap: true },
);

export default mq;
