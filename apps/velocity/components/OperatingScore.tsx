import { useTheme } from '@emotion/react';
import { ReactNode, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Pie, PieChart, PieLabelRenderProps } from 'recharts';
import { TABLET } from './utils/breakpoints';

const OperatingScore = () => {
  const isMobile = useMediaQuery({
    maxWidth: TABLET - 1,
  });

  const theme = useTheme();

  const label = useCallback(
    ({ cx, cy, index }: PieLabelRenderProps): ReactNode =>
      index === 0 ? (
        <>
          <text
            fill="#2e384d"
            fontFamily="Rubik-Light, Rubik"
            fontSize={isMobile ? 36 : 48}
            fontWeight="300"
            letterSpacing="-0.600000024"
            x={cx}
            y={(cy as number) - 5}
          >
            <tspan textAnchor="middle">86</tspan>
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
    [isMobile],
  );

  return (
    <PieChart
      css={{ margin: '0 auto' }}
      height={isMobile ? 120 : 156}
      width={isMobile ? 160 : 225}
    >
      <Pie
        cy={isMobile ? 80 : 100}
        data={Array(isMobile ? 27 : 41)
          .fill(isMobile ? 27 : 41)
          .map(() => ({
            name: 'score',
            value: 1,
            fill: theme.color.secondary,
          }))}
        dataKey="value"
        innerRadius={isMobile ? 46 : 66}
        outerRadius={isMobile ? 49 : 69}
        startAngle={190}
        paddingAngle={isMobile ? 5 : 3}
        endAngle={-10}
      />
      <Pie
        cy={isMobile ? 80 : 100}
        data={Array(isMobile ? 27 : 41)
          .fill(isMobile ? 27 : 41)
          .map((_, i) => ({
            name: 'score',
            value: 1,
            fill: (() => {
              const value = i + 1;
              if (value + (1 % 2)) {
                if (value <= (isMobile ? 22 : 33)) {
                  return theme.color.primary;
                }

                return '#e0e7ff';
              }

              return theme.color.neutral[50];
            })(),
          }))}
        dataKey="value"
        paddingAngle={isMobile ? 5 : 3}
        innerRadius={isMobile ? 55 : 75}
        outerRadius={isMobile ? 81 : 101}
        startAngle={190}
        endAngle={-10}
        label={label}
        labelLine={false}
      />
    </PieChart>
  );
};

export default OperatingScore;
