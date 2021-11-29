const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    heading: '#000',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#40a9ff',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#0e1b28',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#61a0e0',
    label: '#fff',
  },
};

export { lightTheme, darkTheme };
