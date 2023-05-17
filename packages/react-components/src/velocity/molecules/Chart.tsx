/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { keyBy } from 'lodash-es';
import { Fragment } from 'react';
import {
  Area,
  Bar,
  ComposedChart,
  CartesianGrid,
  Legend as ChartLegend,
  ResponsiveContainer,
  ResponsiveContainerProps,
  XAxis,
  YAxis,
  YAxisProps,
  Line,
} from 'recharts';
import { ContentType } from 'recharts/types/component/DefaultLegendContent.js';

import Legend from '../atoms/Legend.js';

interface ChartData {
  type: 'area' | 'bar' | 'line';
  color: string;
  label: string;
  values: number[];
}

export interface ChartProps extends Partial<ResponsiveContainerProps> {
  data?: ChartData[];
  format?: YAxisProps['tickFormatter'];
  labels?: string[];
  means?: boolean;
}

const Chart = ({ data = [], format, labels = [], ...props }: ChartProps) => {
  const {
    color: { secondary, neutral },
  } = useTheme();

  const datasets = Object.entries(
    keyBy<ChartData>(data, (dataset) => dataset.label.toLowerCase()),
  );

  const renderDataset = ([dataset, { color, label, type }]: [
    string,
    ChartData,
  ]) => {
    switch (type) {
      case 'area':
        return (
          <Fragment key={label}>
            <defs>
              <linearGradient id={dataset} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.1} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              dataKey={dataset}
              fill={`url(#${dataset})`}
              fillOpacity={1}
              name={label}
              stroke={color}
              strokeWidth={2}
              dot
            />
          </Fragment>
        );
      case 'bar':
        return (
          <Bar
            barSize={7}
            dataKey={dataset}
            fill={color}
            key={label}
            name={label}
            radius={5}
          />
        );
      case 'line':
        return (
          <Line
            dataKey={dataset}
            fillOpacity={1}
            key={label}
            name={label}
            stroke={color}
            strokeWidth={2}
            dot
          />
        );
      default:
        return null;
    }
  };

  const renderLegend: ContentType = ({ payload }) => (
    <Legend payload={payload} />
  );

  return (
    <ResponsiveContainer height={340} width="100%" {...props}>
      <ComposedChart
        data={labels.map((name, i) => ({
          name,
          ...Object.fromEntries(
            datasets.map(([dataset, { values }]) => [dataset, values[i]]),
          ),
        }))}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        {datasets.map(renderDataset)}
        <CartesianGrid
          stroke={neutral[700]}
          strokeDasharray="2 2"
          strokeOpacity="0.3"
        />
        <ChartLegend content={renderLegend} verticalAlign="top" />
        <XAxis
          dataKey="name"
          fontSize={15}
          interval="preserveStartEnd"
          stroke={secondary}
          tick={{ fill: neutral[500] }}
          tickLine={false}
          tickMargin={8.5}
        />
        <YAxis
          fontSize={15}
          stroke={secondary}
          tick={{ fill: neutral[500] }}
          tickFormatter={format}
          tickLine={false}
          tickMargin={13.5}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
