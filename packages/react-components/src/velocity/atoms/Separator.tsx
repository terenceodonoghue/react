import { useTheme } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

export type SeparatorProps = ComponentPropsWithoutRef<'hr'>;

const Separator = (props: SeparatorProps) => {
  const { color } = useTheme();

  return (
    <hr
      css={{
        height: 1,
        backgroundColor: color.neutral[300],
        border: 'none',
      }}
      {...props}
    />
  );
};

export default Separator;
