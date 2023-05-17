/** @jsxImportSource @emotion/react */
import Section, { SectionProps } from '../atoms/Section.js';
import Driver, { DriverProps } from '../molecules/Driver.js';
import Flex from '../primitives/Flex.js';

export interface DriversProps extends SectionProps {
  list?: DriverProps[];
}

const Drivers = ({ list = [], ...props }: DriversProps) => (
  <Section heading="Top drivers" {...props}>
    <Flex direction="column" spacing={12}>
      {list.map((driver, i) => (
        <Driver rank={i + 1} {...driver} />
      ))}
    </Flex>
  </Section>
);

export default Drivers;
