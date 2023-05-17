/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { rem } from 'polished';
import { useId } from 'react';

import Section, { SectionProps } from '../atoms/Section.js';
import Flex from '../primitives/Flex.js';
import Icon, { IconProps } from '../primitives/Icon.js';
import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

export interface MetricProps extends SectionProps {
  color?: string;
  icon: IconProps['with'];
  label: string;
  value: string | number;
}

const Metric = ({
  color: iconColor,
  icon,
  label,
  value,
  ...props
}: MetricProps) => {
  const labelId = useId();
  const { color } = useTheme();

  return (
    <Section
      aria-labelledby={labelId}
      css={mq({
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: ['column', 'row', 'column'],
        padding: ['16px', '32px 24px', '16px 24px'],
      })}
      {...props}
    >
      <Icon
        aria-hidden
        backdrop
        color={iconColor || color.primary}
        css={mq({ marginBottom: [16, 0, 16], marginRight: [0, 16, 0] })}
        size={20}
        with={icon}
      />

      <Flex direction="column-reverse">
        <Text as="span" id={labelId} variant="p2">
          {label}
        </Text>
        <Text
          as="span"
          css={mq({
            marginBottom: [6, 0],
            fontSize: [rem(34), rem(48)],
            lineHeight: [rem(32), rem(57)],
          })}
          variant="h1"
        >
          {value}
        </Text>
      </Flex>
    </Section>
  );
};

export default Metric;
