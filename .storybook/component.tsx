import {
  DocsContainerProps,
  DocsContainer as StorybookDocsContainer,
} from "@storybook/blocks"
import { themes } from "@storybook/theming"
import {
  Container,
  ContainerProps,
  UIProvider,
  useColorMode,
} from "@yamada-ui/react"
import React, { FC, ReactNode, useEffect } from "react"
import { useDarkMode } from "storybook-dark-mode"

import { theme } from "../src/theme"

export const StoryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <UIProvider theme={theme}>
      <App p="md">{children}</App>
    </UIProvider>
  )
}

const App: FC<ContainerProps> = ({ children, p }) => {
  const { changeColorMode } = useColorMode()

  const colorMode = useDarkMode() ? "dark" : "light"

  useEffect(() => {
    changeColorMode(colorMode)
  }, [colorMode, changeColorMode])

  return (
    <Container alignItems="flex-start" gap="md" p={p}>
      {children}
    </Container>
  )
}

export const DocsContainer: FC<
  DocsContainerProps & { children: ReactNode }
> = ({ children, theme, ...rest }) => {
  const dark = useDarkMode()

  theme = dark ? themes.dark : themes.light

  return (
    <StorybookDocsContainer theme={theme} {...rest}>
      {children}
    </StorybookDocsContainer>
  )
}
