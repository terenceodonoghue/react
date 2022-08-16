import { FunctionComponent, ReactNode } from 'react';

interface AppBarProps {
  children: ReactNode;
}

const AppBar: FunctionComponent<AppBarProps> = (props) => (
  <div
    css={({ color }) => ({
      alignItems: 'center',
      backgroundColor: color.neutral[50],
      borderBottom: `solid 1px ${color.neutral[300]}`,
      display: 'flex',
      minHeight: 80,
      padding: '0 25px',
      position: 'sticky',
      top: 0,
      zIndex: 1100,
    })}
    data-testid="app-bar"
    {...props}
  />
);

export default AppBar;
