// import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const fonts = 'Work Sans';

const themeLight = createTheme({
  typography: {
    fontFamily: fonts,
  },
  palette: {
    background: {
      default: '#D9DAD8',
    },
    // primary: {
    //   main: colors.blue[700],
    // },
    // error: {
    //   main: colors.red[800],
    // },
    // warning: {
    //   main: colors.orange[700],
    // },
  },
});

export default themeLight;
