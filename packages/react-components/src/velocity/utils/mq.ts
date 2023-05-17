import facepaint from 'facepaint';

export type MediaQuery<Values> = Values | Partial<[Values, Values, Values]>;

const mq = facepaint(
  [768, 1025].map((bp) => `@media (min-width: ${bp}px)`),
  { overlap: true },
);

export default mq;
