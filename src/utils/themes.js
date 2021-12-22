const THEME = {
  LIGHT: { switchValue: true, name: 'light-theme' },
  DARK: { switchValue: false, name: 'dark-theme' },
};

export const toggleTheme = (switchValue) => {
  document.documentElement.className = switchValue
    ? THEME.LIGHT.name
    : THEME.DARK.name;
  localStorage.setItem(
    'theme',
    switchValue ? THEME.LIGHT.name : THEME.DARK.name
  );
};

export const loadTheme = () => {
  const theme = localStorage.getItem('theme');
  document.documentElement.className = theme ? theme : THEME.LIGHT.name;
  return theme && theme === THEME.DARK.name
    ? THEME.DARK.switchValue
    : THEME.LIGHT.switchValue;
};
