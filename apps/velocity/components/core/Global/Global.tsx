import { FunctionComponent } from 'react';
import { Global } from '@emotion/react';
import mq from '../../utils/mq';

const GlobalStyles: FunctionComponent = () => (
  <Global
    styles={[
      ({ palette }) =>
        mq({
          body: {
            backgroundColor: palette.neutral[100],
            color: palette.neutral[900],
          },
          main: {
            marginLeft: [0, 0, 80],
          },
        }),
    ]}
  />
);

export default GlobalStyles;
