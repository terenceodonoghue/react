/** @jsxImportSource @emotion/react */
import { money, unit } from '@terenceodonoghue/utils';

import Article, { ArticleProps } from '../atoms/Article.js';
import Avatar from '../atoms/Avatar.js';
import Status from '../atoms/Status.js';

export interface DriverProps extends ArticleProps {
  avatar: string;
  distance: number;
  earnings: number;
  name: string;
  rank?: number;
  vehicle: string;
}

const Driver = ({
  avatar,
  distance,
  earnings,
  name,
  rank,
  vehicle,
  ...props
}: DriverProps) => (
  <Article
    key={name}
    text={[name, vehicle, money(earnings), unit(distance).km]}
    {...props}
  >
    <Status aria-label="Rank" show={rank}>
      <Avatar alt={`${name}'s avatar`} size={48} src={avatar} />
    </Status>
  </Article>
);

export default Driver;
