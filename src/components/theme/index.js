import { createMuiTheme } from "@material-ui/core";
import tinyColor from 'tinycolor2';

const colorPrimary = "#5ea9dd";

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: colorPrimary,
            light: tinyColor(colorPrimary).lighten.toString()
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: "shabnam !important",
            }
        },
        MuiButton: {
            label: {
                fontFamily: "shabnam !important",
                color: "white"
            }
        }
    }
});

export default Theme;