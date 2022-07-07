import { addons } from '@storybook/addons';
import themes from './themes.mjs';

addons.setConfig({
  theme: themes.manager,
});
