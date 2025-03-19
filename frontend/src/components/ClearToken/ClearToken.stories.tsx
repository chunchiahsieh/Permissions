import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {ClearToken} from './ClearToken';

const meta: Meta<typeof ClearToken> = {
  component: ClearToken,
};

export default meta;

type Story = StoryObj<typeof ClearToken>;

export const Basic: Story = {args: {}};
