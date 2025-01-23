import type { Preview } from "@storybook/react";

import { themes } from '@storybook/theming'
import React from "react";

import { DocsContainer, StoryProvider } from "./component";

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <StoryProvider>
          <Story />
        </StoryProvider>
      )
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "default",
      values: [
        {
          name: "default",
          value: "#f5f5f5",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, appBg: 'black' },
      // Override the default light theme
      light: { ...themes.normal, appBg: 'white' }
    },
    docs: { container: DocsContainer },
    nextjs: {
      appDirectory: true,
    },
  }
};

export default preview;
