/** @jsxImportSource @emotion/react */
import { useId } from 'react';

import Article from '../atoms/Article.js';
import Switch, { SwitchProps } from '../atoms/Switch.js';

export interface SettingProps extends SwitchProps {
  description: string;
  label: string;
}

const Setting = ({
  className,
  description,
  label,
  style,
  ...props
}: SettingProps) => {
  const inputId = useId();
  const descriptionId = useId();

  return (
    <Article
      className={className}
      descriptionId={descriptionId}
      labelFor={inputId}
      position="left"
      style={style}
      text={[label, description]}
    >
      <Switch aria-describedby={descriptionId} id={inputId} {...props} />
    </Article>
  );
};

export default Setting;
