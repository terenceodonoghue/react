/** @jsxImportSource @emotion/react */
import type { FunctionComponent } from 'react';

import {
  GitHub,
  InVision,
  Medium,
  Slack,
  Twitter,
} from '@terenceodonoghue/react-icons/brands';

import Card, { type CardProps } from '../atoms/Card.js';
import IntegrationCard from '../molecules/IntegrationCard.js';
import Text from '../primitives/Text.js';
import mq from '../utils/mq.js';

export interface IntegrationsProps extends CardProps {
  gitHub?: boolean;
  inVision?: boolean;
  medium?: boolean;
  twitter?: boolean;
  slack?: boolean;
}

const Integrations: FunctionComponent<IntegrationsProps> = ({
  gitHub = false,
  inVision = false,
  medium = false,
  twitter = false,
  slack = false,
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
      {[
        {
          name: 'InVision',
          description: 'Boards and prototypes',
          icon: InVision,
          enabled: inVision,
        },
        {
          name: 'GitHub',
          description: 'Commits data and history',
          icon: GitHub,
          enabled: gitHub,
        },
        {
          name: 'Slack',
          description: 'Messages and channels',
          icon: Slack,
          enabled: slack,
        },
        {
          name: 'Twitter',
          description: 'Tweets data',
          icon: Twitter,
          enabled: twitter,
        },
        {
          name: 'Medium',
          description: 'Followers count',
          icon: Medium,
          enabled: medium,
        },
      ].map((integration) => (
        <IntegrationCard key={integration.name} {...integration} />
      ))}
    </div>
  </Card>
);

export default Integrations;
