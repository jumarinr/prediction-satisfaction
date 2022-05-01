import colors from '@mui/material/colors';
import makeStyles from '@mui/styles/makeStyles';

const styles = makeStyles(() => ({
  emptyInput: {
    display: 'none',
  },
  infoFormat: {
    fontSize: 'small',
    color: colors.grey[500],
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'end',
  },
  button: {
    textTransform: 'none',
  },

}));

export default styles;
