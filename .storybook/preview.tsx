import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'
import { DocsContainer, StoryProvider } from "./component";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "default",
      values: [
        {
          name: "default",
          value: "#f5f5f5",
        },
      ],
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, appBg: 'black' },
      // Override the default light theme
      light: { ...themes.normal, appBg: 'white' }
    },
    nextjs: {
      appDirectory: true,
    },
    docs: { container: DocsContainer },
  },
  decorators: [
    (Story) => {
      return (
        <StoryProvider>
          <Story />
        </StoryProvider>
      )
    },
  ]
};

export default preview;
