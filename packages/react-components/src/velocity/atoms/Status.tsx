/** @jsxImportSource @emotion/react */
import { CSSObject, useTheme } from '@emotion/react';
import { rem, rgba } from 'polished';
import { Children, ComponentPropsWithoutRef } from 'react';

export interface StatusProps extends ComponentPropsWithoutRef<'div'> {
  show?: boolean | number;
}

const Status = ({ children, show: status = false, ...props }: StatusProps) => {
  const { color, font } = useTheme();

  const css: CSSObject = Number.isInteger(status)
    ? {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 16,
        height: 16,
        color: color.neutral[700],
        backgroundColor: color.neutral[50],
        boxShadow: `0 3px 10px ${rgba(color.primary, 0.3)}`,
        fontSize: rem(10),
        fontFamily: font.family,
        fontWeight: font.weight.medium,
        lineHeight: rem(12),
      }
    : {
        height: 12,
        width: 12,
        backgroundColor: color.primary,
        border: `solid 2px ${color.neutral[50]}`,
      };

  return (
    <div
      css={{
        position: 'relative',
      }}
    >
      <div
        css={[
          css,
          {
            position: 'absolute',
            top: 0,
            right: 0,
            borderRadius: '50%',
          },
        ]}
        hidden={!status}
        role="status"
        {...props}
      >
        {status}
      </div>
      {Children.only(children)}
    </div>
  );
};

export default Status;
