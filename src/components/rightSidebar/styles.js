import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles(theme=>({
    root: {
        backgroundColor: "white !important",
        width: "18%",
        padding: "1.5rem 1rem",
        overflowY: "auto",
    },
    logoType: {
        fontSize: "1.5rem",
        fontWeight: 600,
        marginRight: "0.5rem",
        color: theme.palette.primary.main
    },
    hashTagTitle: {
        fontSize: "1.1rem",
        fontWeight: 600,
        marginTop: "3rem",
        marginBottom: "1.5rem"
    },
    hashtag: {
        marginRight: "0.8rem"
    },
    hashtagParent: {
        marginBottom: "0.5rem !important",
        padding: "0.15rem !important",
        width: "100%",
    }
}));

export default useStyle;