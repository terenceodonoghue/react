import normalize from 'normalize.css';
import { em, stripUnit } from 'polished';
import React, { FunctionComponent } from 'react';
import { Global } from '@emotion/react';
import mq from '../../utils/mq';

const GlobalStyles: FunctionComponent = () => (
  <Global
    styles={[
      normalize,
      ({ palette, typography }) =>
        mq({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          ':any-link': {
            textDecoration: 'none',
          },
          body: {
            backgroundColor: palette.neutral[100],
            color: palette.neutral[900],
            fontFamily: typography.fontFamily,
            lineHeight: stripUnit(em(22, typography.fontSize)),
          },
          h1: {
            fontSize: em(28, typography.fontSize),
            fontStyle: 'normal',
            fontWeight: typography.fontWeight.light,
            lineHeight: em(32, typography.fontSize),
          },
          main: {
            marginLeft: [0, 0, 80],
          },
        }),
    ]}
  />
);

export default GlobalStyles;
