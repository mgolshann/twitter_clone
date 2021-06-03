import { Hidden, makeStyles } from "@material-ui/core";
import { Opacity } from "@material-ui/icons";

const useStyle = makeStyles({
    root: {
        display: "flex",
        height: "100vh",
        width: "100%",
    },
    divider: {
        height: "100%",
        widht: 5,
        backgroundColor: "#7EBAFF !important",
        filter: "opacity(0.5) !important",
    },
    content: {
        flex: 1,
        overflowY: "auto",
        backgroundColor: "white"
    },
    parentWait: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh"
    }
});

export default useStyle;