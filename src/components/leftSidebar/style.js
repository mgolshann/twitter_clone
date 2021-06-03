import {makeStyles} from "@material-ui/core";
import { BorderAll, ImportantDevices } from "@material-ui/icons";
import Theme from "../theme";


const useStyle = makeStyles(theme=>({
    root : {
        backgroundColor: "white !important",
        width: "25%",
        padding: "1.5rem 1rem",
        overflowY: "auto",
    },
    profText: {
        marginLeft: "0.5rem",
        width: "max-content",
        direction: "ltr"
    },
    profName: {
        flex: 1,
    },
    profId: {
        flex: 1,
        color: Theme.palette.text.hint,
        fontSize: "0.78rem"
    },
    tweeterRoot: {
        background: "#f5f8fa",
        marginTop: "3rem",
        borderRadius: "2.5rem",
        padding: "11px 24px",

    },
    tweeterTitle: {
        fontSize: "1.1rem !important",
        fontWeight: "600 !important",
        marginBottom: "11px",
    },
    tweeterParent: {
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
    },
    tweeterImg: {
        width: 50,
        height: 50,
        borderRadius: "50%"

    }
}));

export default useStyle;
