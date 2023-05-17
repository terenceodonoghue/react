/** @jsxImportSource @emotion/react */
import { useForm, useFormConfiguration } from '@terenceodonoghue/react-hooks';

import Button from '../atoms/Button.js';
import Section, { SectionProps } from '../atoms/Section.js';
import TextField from '../atoms/TextField.js';
import Grid from '../primitives/Grid.js';
import mq from '../utils/mq.js';

export interface PersonalDataProps extends SectionProps {
  config?: useFormConfiguration<{
    email: string;
    firstName: string;
    lastName: string;
    birthDate: number;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }>;
}

const PersonalData = ({ config, ...props }: PersonalDataProps) => {
  const { handleSubmit, register } = useForm(config);

  return (
    <Section
      heading="Personal data"
      description="Use this page to update your contact information and change your password."
      {...props}
    >
      <form onSubmit={handleSubmit}>
        <Grid
          columns={[4, 12]}
          css={mq({ maxWidth: [null, null, '80%'] })}
          gutterY={[16, 32]}
          marginY={[24, 32]}
        >
          <TextField
            css={{ gridColumn: 'span 4' }}
            label="Email address"
            {...register('email', {
              autoComplete: 'email',
              placeholder: 'jane_appleseed@mac.com',
              required: true,
              type: 'email',
            })}
          />
          <TextField
            css={mq({ gridColumn: 'span 4', gridRow: [null, 2, 2] })}
            label="First name"
            {...register('firstName', {
              autoComplete: 'given-name',
              placeholder: 'Jane',
              required: true,
            })}
          />
          <TextField
            css={mq({ gridColumn: 'span 4', gridRow: [null, 2, 2] })}
            label="Last name"
            {...register('lastName', {
              autoComplete: 'family-name',
              placeholder: 'Appleseed',
              required: true,
            })}
          />
          <TextField
            css={mq({ gridColumn: 'span 4', gridRow: [null, 2, 2] })}
            label="Birth date"
            type="date"
            {...register('birthDate', { autoComplete: 'bday', type: 'date' })}
          />
          <TextField
            css={mq({ gridColumn: 'span 4', gridRow: [null, 3, 3] })}
            label="Current password"
            {...register('currentPassword', {
              autoComplete: 'current-password',
              type: 'password',
            })}
          />
          <TextField
            css={mq({ gridColumn: 'span 4', gridRow: [null, 3, 3] })}
            label="New password"
            {...register('newPassword', {
              autoComplete: 'new-password',
              type: 'password',
            })}
          />
          <TextField
            css={mq({ gridColumn: 'span 4', gridRow: [null, 3, 3] })}
            label="confirm"
            {...register('confirmPassword', {
              autoComplete: 'new-password',
              type: 'password',
            })}
          />
        </Grid>
        <Button
          css={mq({ width: ['100%', 200] })}
          type="submit"
          variant="primary"
        >
          Save Changes
        </Button>
      </form>
    </Section>
  );
};

export default PersonalData;
