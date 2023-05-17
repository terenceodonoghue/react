/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { ReactNode, useCallback } from 'react';
import {
  Pie,
  PieChart,
  PieLabelRenderProps,
  ResponsiveContainer,
} from 'recharts';

import Section, { SectionProps } from '../atoms/Section.js';
import Flex from '../primitives/Flex.js';
import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

export interface OperatingScoreProps extends SectionProps {
  score?: number;
  trips?: number;
}

const OperatingScore = ({
  score = 0,
  trips = 0,
  ...props
}: OperatingScoreProps) => {
  const { color } = useTheme();

  const label = useCallback(
    ({ cx, cy, index }: PieLabelRenderProps): ReactNode =>
      index === 0 ? (
        <>
          <text
            fill="#2e384d"
            fontFamily="Rubik-Light, Rubik"
            fontSize={48}
            fontWeight="300"
            letterSpacing="-0.600000024"
            x={cx}
            y={(cy as number) - 5}
          >
            <tspan textAnchor="middle">{score}</tspan>
          </text>
          <text
            dominantBaseline="central"
            fill="#8798ad"
            fontFamily="Rubik-Regular, Rubik"
            fontSize="13"
            fontWeight="normal"
            letterSpacing="1.213333"
          >
            <tspan dy={15} textAnchor="middle" x={cx} y={cy}>
              OPERATING
            </tspan>
            <tspan dy={30} textAnchor="middle" x={cx} y={cy}>
              SCORE
            </tspan>
          </text>
        </>
      ) : null,
    [score],
  );

  return (
    <Section aria-label="Operating score" {...props}>
      <Flex
        align="center"
        direction={['column', 'column', 'row']}
        spacing={[8, 8, 60]}
      >
        <div
          css={{
            flexShrink: 0,
            width: 255,
            height: 156,
          }}
        >
          <ResponsiveContainer height={156} width="100%">
            <PieChart css={{ margin: '0 auto' }}>
              <Pie
                cy={100}
                data={Array(41)
                  .fill(41)
                  .map(() => ({
                    name: 'score',
                    value: 1,
                    fill: color.secondary,
                  }))}
                dataKey="value"
                innerRadius={66}
                outerRadius={69}
                startAngle={190}
                paddingAngle={3}
                endAngle={-10}
              />
              <Pie
                cy={100}
                data={Array(41)
                  .fill(41)
                  .map((_, i) => ({
                    name: 'score',
                    value: 1,
                    fill:
                      i + 1 <= (score / 100) * 41
                        ? color.primary
                        : color.secondary,
                  }))}
                dataKey="value"
                paddingAngle={3}
                innerRadius={75}
                outerRadius={101}
                startAngle={190}
                endAngle={-10}
                label={label}
                labelLine={false}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div css={{ flex: 1 }}>
          <Text
            as="h2"
            css={mq({
              display: ['none', 'none', 'block'],
              margin: '0 0 13px',
            })}
            variant="h3"
          >
            Welcome to Velocity
          </Text>
          <Text
            align={['center', 'center', 'left']}
            css={{ margin: 0 }}
            variant="p2"
          >
            All cars are operating well. There were {trips.toLocaleString()}{' '}
            trips since your last login.
          </Text>
        </div>
      </Flex>
    </Section>
  );
};

export default OperatingScore;
