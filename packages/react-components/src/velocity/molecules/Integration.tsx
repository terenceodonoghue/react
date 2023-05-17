/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rgba } from 'polished';
import { forwardRef, useId } from 'react';

import { ReactIcon } from '@terenceodonoghue/react-icons';

import Article from '../atoms/Article.js';
import Checkbox, { CheckboxProps } from '../atoms/Checkbox.js';
import Flex from '../primitives/Flex.js';

export interface IntegrationProps extends CheckboxProps {
  description: string;
  icon: ReactIcon;
  label: string;
}

const Integration = forwardRef<HTMLInputElement, IntegrationProps>(
  ({ description, label, icon: Icon, ...props }, ref) => {
    const inputId = useId();
    const descriptionId = useId();
    const { color } = useTheme();

    return (
      <Checkbox
        aria-describedby={descriptionId}
        id={inputId}
        ref={ref}
        {...props}
      >
        <Flex
          align="center"
          css={{
            flexShrink: 0,
            width: 70,
            height: 70,
            marginRight: 16,
            backgroundColor: rgba(color.neutral[700], 0.1),
            borderRadius: '50%',
          }}
          justify="center"
        >
          {Icon ? <Icon aria-hidden size={30} /> : undefined}
        </Flex>
        <Article
          css={{ flexGrow: 1 }}
          descriptionId={descriptionId}
          labelFor={inputId}
          text={[label, description]}
        />
      </Checkbox>
    );
  },
);

Integration.displayName = 'Integration';

export default Integration;
