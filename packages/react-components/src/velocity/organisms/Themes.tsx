/** @jsxImportSource @emotion/react */
import Section, { SectionProps } from '../atoms/Section.js';
import Theme, { ThemeProps } from '../molecules/Theme.js';
import mq from '../utils/mq.js';

export interface ThemesProps extends SectionProps {
  list: ThemeProps[];
}

const Themes = ({ list = [], ...props }: ThemesProps) => (
  <Section
    heading="Theme"
    description="Select a color scheme for your Velocity app."
    {...props}
  >
    <div
      css={mq({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 120px)',
        gap: [24, 32],
      })}
    >
      {list.map((theme) => (
        <Theme key={theme.label} {...theme} />
      ))}
    </div>
  </Section>
);

export default Themes;
