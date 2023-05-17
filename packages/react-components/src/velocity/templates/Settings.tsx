/** @jsxImportSource @emotion/react */
import Main, { MainProps } from '../atoms/Main.js';
import PersonalData, { PersonalDataProps } from '../organisms/PersonalData.js';
import Flex from '../primitives/Flex.js';

export interface SettingsProps extends MainProps {
  personal?: PersonalDataProps['config'];
}

const Settings = ({ personal, ...props }: SettingsProps) => (
  <Main heading="Settings" {...props}>
    <Flex direction="column" spacing={[16, 24]}>
      <PersonalData config={personal} />
    </Flex>
  </Main>
);

export default Settings;
