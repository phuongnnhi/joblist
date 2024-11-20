import React, { useState, useMemo, createContext, useContext } from 'react';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ThemeProvider, createTheme, CssBaseline, useMediaQuery } from '@mui/material';

// Create a context for theme control
const ThemeModeContext = createContext();

export const useThemeMode = () => useContext(ThemeModeContext);

export default function ToggleColorMode({ children }) {
  const [mode, setMode] = useState('system'); // Default mode is system
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const appliedMode = mode === 'system' ? (prefersDarkMode ? 'dark' : 'light') : mode;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: appliedMode,
        },
      }),
    [appliedMode]
  );

  return (
    <ThemeModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function ThemeToggleControl() {
  const { mode, setMode } = useThemeMode();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'transparent',
        color: 'white',
        borderRadius: 1,
        p: 3,
        minHeight: '56px',
      }}
    >
      <FormControl>
        <RadioGroup
          aria-labelledby="theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={(event) => setMode(event.target.value)}
        >
          <FormControlLabel value="light" control={<Radio sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: 'white',
                },
              }}/>} label="Light" />
          <FormControlLabel value="dark" control={<Radio sx={{
                color: 'white',
                '&.Mui-checked': {
                  color: 'white',
                },
              }}/>} label="Dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}