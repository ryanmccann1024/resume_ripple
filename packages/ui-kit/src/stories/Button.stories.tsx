import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], // enables Docs tab auto-generation
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  args: {
    label: 'Click me',
    size: 'medium',
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {};

export const Primary: Story = {
  args: { primary: true, label: 'Primary' },
};

export const Large: Story = {
  args: { size: 'large', label: 'Large' },
};

export const Small: Story = {
  args: { size: 'small', label: 'Small' },
};
