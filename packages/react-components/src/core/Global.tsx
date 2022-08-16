import { Global, GlobalProps } from '@emotion/react';
import { FunctionComponent } from 'react';

const GlobalStyles: FunctionComponent<GlobalProps> = ({ styles }) => (
  <Global styles={styles} />
);

export default GlobalStyles;
