import {ThemeContext} from './theme-context';
import {themes} from './theme-context';
import React from 'react';
import {useContext} from 'react';

const ThemedButton =()=>{    
  const { theme, toggleTheme } = useContext(ThemeContext);
    return (  
            <button
              onClick={(e)=>toggleTheme(theme===themes.light?themes.dark:themes.light)}
              style={{backgroundColor: theme.background}}>
              Toggle Theme
            </button>   
      );
  
}


export default ThemedButton;