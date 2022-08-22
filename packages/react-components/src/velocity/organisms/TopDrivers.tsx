/** @jsxImportSource @emotion/react */
import type { FunctionComponent } from 'react';

import Card, { type CardProps } from '../atoms/Card.js';
import Driver, { type DriverProps } from '../molecules/Driver.js';

export interface TopDriversProps extends CardProps {
  drivers: DriverProps[];
}

const TopDrivers: FunctionComponent<TopDriversProps> = ({
  drivers = [],
  ...props
}) => (
  <Card
    css={{ display: 'flex', flexDirection: 'column', gap: 12 }}
    caption="Top Drivers"
    {...props}
  >
    {drivers.map((driver, i) => (
      <Driver key={driver.name} number={i + 1} {...driver} />
    ))}
  </Card>
);

export default TopDrivers;
