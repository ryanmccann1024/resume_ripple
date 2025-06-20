import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/stories/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
};
export default config;
