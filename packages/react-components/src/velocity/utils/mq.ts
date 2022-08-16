import facepaint from 'facepaint';

const mq = facepaint(
  [768, 1025].map((bp) => `@media (min-width: ${bp}px)`),
  { overlap: true },
);

export default mq;
