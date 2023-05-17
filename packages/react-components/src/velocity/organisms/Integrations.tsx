/** @jsxImportSource @emotion/react */
import { useForm, useFormConfiguration } from '@terenceodonoghue/react-hooks';
import {
  GitHub,
  InVision,
  Medium,
  Slack,
  Twitter,
} from '@terenceodonoghue/react-icons/brands';

import Section, { SectionProps } from '../atoms/Section.js';
import Integration, { IntegrationProps } from '../molecules/Integration.js';
import Grid from '../primitives/Grid.js';

export interface IntegrationsProps extends SectionProps {
  config?: useFormConfiguration<{
    enabled: string[];
  }>;
}

const Integrations = ({ config, ...props }: IntegrationsProps) => {
  const { handleSubmit, register } = useForm(config);

  return (
    <Section
      heading="Integrations"
      description="Manage third-party app integrations."
      {...props}
    >
      <form onChange={handleSubmit}>
        <Grid gutterX={48}>
          {[
            {
              label: 'InVision',
              description: 'Boards and prototypes',
              icon: InVision,
            },
            {
              label: 'GitHub',
              description: 'Commits data and history',
              icon: GitHub,
            },
            {
              label: 'Slack',
              description: 'Messages and channels',
              icon: Slack,
            },
            {
              label: 'Twitter',
              description: 'Tweets data',
              icon: Twitter,
            },
            {
              label: 'Medium',
              description: 'Followers count',
              icon: Medium,
            },
          ].map((integration: IntegrationProps) => (
            <Integration
              css={{ gridColumn: 'span 4' }}
              key={integration.label}
              {...integration}
              {...register('enabled')}
            />
          ))}
        </Grid>
      </form>
    </Section>
  );
};

export default Integrations;
