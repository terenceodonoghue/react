/** @jsxImportSource @emotion/react */
import { FunctionComponent, useId } from 'react';

import Card, { type CardProps } from '../atoms/Card.js';
import Integration, {
  type IntegrationProps,
} from '../molecules/Integration.js';
import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

export interface IntegrationsProps extends CardProps {
  list: IntegrationProps[];
}

const Integrations: FunctionComponent<IntegrationsProps> = ({
  list = [],
  ...props
}) => {
  const descriptionId = useId();

  return (
    <Card aria-describedby={descriptionId} heading="Integrations" {...props}>
      <Text id={descriptionId}>Manage third-party app integrations.</Text>
      <div
        css={mq({
          display: 'grid',
          gridTemplateColumns: [
            'repeat(1, minmax(0, 1fr))',
            'repeat(2, minmax(0, 1fr))',
            'repeat(3, minmax(0, 1fr))',
          ],
          gridAutoRows: '1fr',
          rowGap: [16, 24],
          columnGap: 48,
          marginTop: [24, 32],
        })}
      >
        {list.map((integration) => (
          <Integration key={integration.label} {...integration} />
        ))}
      </div>
    </Card>
  );
};

export default Integrations;
