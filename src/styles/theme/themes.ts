const lightTheme = {
  navPrimary: 'rgba(37,39,39,1)',
  navSecondary: 'rgba(107,109,109,1)',
  mastSubtitle: 'rgba(241,233,231,0.6)',
  primary: 'rgba(255,221,0,1)',
  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  background: 'rgba(250,248,243,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
};

const darkTheme: Theme = {
  navPrimary: 'rgba(37,39,39,1)',
  navSecondary: 'rgba(107,109,109,1)',
  mastSubtitle: 'rgba(241,233,231,0.8)',
  primary: 'rgba(255,221,0,1)',
  text: 'rgba(241,233,231,1)',
  textSecondary: 'rgba(241,233,231,0.6)',
  background: 'rgba(28,31,29,1)',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
