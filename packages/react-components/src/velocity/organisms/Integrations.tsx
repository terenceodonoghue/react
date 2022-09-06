/** @jsxImportSource @emotion/react */
import type { FunctionComponent } from 'react';

import Card, { type CardProps } from '../atoms/Card.js';
import IntegrationCard, {
  type IntegrationCardProps,
} from '../molecules/IntegrationCard.js';
import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

export interface IntegrationsProps extends CardProps {
  providers: IntegrationCardProps[];
  gitHub?: boolean;
  inVision?: boolean;
  medium?: boolean;
  twitter?: boolean;
  slack?: boolean;
}

const Integrations: FunctionComponent<IntegrationsProps> = ({
  providers = [],
  ...props
}) => (
  <Card caption="Integrations" {...props}>
    <Text>Manage third-party app integrations.</Text>
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
      {providers.map((provider) => (
        <IntegrationCard key={provider.name} {...provider} />
      ))}
    </div>
  </Card>
);

export default Integrations;
