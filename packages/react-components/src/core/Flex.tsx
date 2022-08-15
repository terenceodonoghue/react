/** @jsxImportSource @emotion/react */
import { Property } from 'csstype';
import { FunctionComponent, HTMLAttributes } from 'react';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: Property.FlexDirection;
  wrap?: Property.FlexWrap;
  gap?: Property.Gap;
  columnGap?: Property.ColumnGap;
  rowGap?: Property.RowGap;
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  justifyItems?: Property.JustifyItems;
}

const Flex: FunctionComponent<FlexProps> = ({
  alignItems,
  children,
  columnGap,
  direction,
  gap,
  justifyContent,
  rowGap,
  wrap,
  ...props
}) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap,
        alignItems,
        justifyContent,
        columnGap,
        rowGap,
        gap,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
