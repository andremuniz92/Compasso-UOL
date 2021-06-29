import { createMuiTheme } from '@material-ui/core/styles';
import {primaryColor} from './colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white"
    },
    text: {
        primary: '#000000'
    }
  },
});

export default theme