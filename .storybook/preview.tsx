import React from 'react';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// Example decorator that wraps stories with a div element
const withWrapper = (Story: React.ComponentType) => (
  <div style={{ margin: '3em', fontFamily: "Inter,Open Sans,Arial,Helvetica,sans-serif" }}>
    <Story />
  </div>
);

// Adding the decorator globally
export const decorators = [withWrapper];

export default preview;
