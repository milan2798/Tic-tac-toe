import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import React from 'react';
import {useState} from 'react';

// An intermediate component that uses the ThemedButton


function App() {
    
    

 
    const [theme, toggleTheme] = useState(themes.light);
    const value = { theme, toggleTheme };

 
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <div>
        <ThemeContext.Provider value={value}>
        <div>
          <ThemedButton />
        </div>
        </ThemeContext.Provider>
        
      </div>
    );
  
}

export default App;