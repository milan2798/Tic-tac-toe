import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import React from 'react';

// An intermediate component that uses the ThemedButton


class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState({
        theme:
          this.state.theme === themes.dark
            ? themes.light
            : themes.dark,
      });
    }
    this.state = {
      theme: themes.light,
      toggleTheme:this.toggleTheme
    };

  
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
        <div>
          <ThemedButton />
        </div>
        </ThemeContext.Provider>
        
      </div>
    );
  }
}

export default App;