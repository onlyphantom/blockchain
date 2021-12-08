import * as React from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';

import { lightTheme, darkTheme } from './index';
import Header from '../Header';
import { baseStyles } from '../styles/GlobalStyles';
import { styles } from '../../custom/styles/styles';

class ThemeProviderWrapper extends React.Component {
  state = {
    // isDarkThemeActive: false,
    isDarkThemeActive: true,
  };

  componentDidMount() {
    this.retrieveActiveTheme();
  }

  retrieveActiveTheme = () => {
    const isDarkThemeActive = JSON.parse(window.localStorage.getItem('isDarkThemeActive'));

    this.setState({ isDarkThemeActive });
  };

  toggleActiveTheme = () => {
    this.setState(prevState => ({ isDarkThemeActive: !prevState.isDarkThemeActive }));

    window.localStorage.setItem('isDarkThemeActive', JSON.stringify(!this.state.isDarkThemeActive));
  };

  render() {
    const { children, location } = this.props;

    const { isDarkThemeActive } = this.state;

    const currentActiveTheme = isDarkThemeActive ? darkTheme : lightTheme;

    return (
      <div>
        <Global styles={[baseStyles, ...styles]} />
        <Header
          location={location}
          isDarkThemeActive={isDarkThemeActive}
          toggleActiveTheme={this.toggleActiveTheme}
        />
        <ThemeProvider theme={currentActiveTheme}>{children}</ThemeProvider>
      </div>
    );
  }
}

export default ThemeProviderWrapper;
