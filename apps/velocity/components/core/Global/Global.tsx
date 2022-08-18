import { Global } from '@emotion/react';
import { FunctionComponent } from 'react';

import { mq } from '@terenceodonoghue/react-components/velocity';

const GlobalStyles: FunctionComponent = () => (
  <Global
    styles={[
      ({ color }) =>
        mq({
          body: {
            backgroundColor: color.neutral[100],
            color: color.neutral[900],
          },
          main: {
            marginLeft: [0, 0, 80],
          },
        }),
    ]}
  />
);

export default GlobalStyles;
