import { Global, type GlobalProps } from '@emotion/react';
import type { FunctionComponent } from 'react';

const GlobalStyles: FunctionComponent<GlobalProps> = ({ styles }) => (
  <Global styles={styles} />
);

export default GlobalStyles;
