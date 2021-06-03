import { makeStyles } from "@material-ui/styles";
import Theme from "../../components/theme";


const useStyle = makeStyles(theme=>({
    root: {
        backgroundColor: "#e6e6e6",
    },
    header: {
        padding: 18,
        display: "flex",
        backgroundColor: "white",
    },
    headerTitle: {
        fontSize: "1.2rem",
        fontWeight: 600
    },
    divider: {
        backgroundColor: "#7EBAFF",
        filter: "opacity(0.18)",
    },
    newTweet: {
        display: "flex",
        padding: 18,
        backgroundColor: "white",
        flexDirection: "column"
    },
    tweetItem: {
        display: "flex",
        padding: 18,
        backgroundColor: "white",
        flexDirection: "column",
        marginTop: "0.5rem"
    },
    tweetItemName: {
        fontSize: 20,
        fontWeight: 600,
        marginRight: "1rem"
    },
    tweetItemId: {
        marginRight: "0.5rem",
        fontSize: "0.9rem",
        paddingTop: "0.3rem",
        color: Theme.palette.text.hint
    },
    textTweet: {
        marginRight: "1rem",
        fontSize: "0.9rem",
        marginTop: "0.65rem",
    },
    input: {
        marginRight: "1rem",
        flex: 1,
        border: "none",
        "&:focus": {
            outline: "unset"
        }
    },
    newTweetBtn: {
        borderRadius: "1rem",
        fontFamily: "'Shabnam'",
        minHeight: "30px",
        color: "white",
        height: "30px",
        lineHeight: "1rem",
        minWidth: "5rem"
    },
    newTweetImg: {
        marginLeft: "0.5rem",
        border: "1px solid #3337",
        borderRadius: "50%",
        padding: "0.2rem"
    },
    tweetParent: {
        backgroundColor: "white", 
        marginTop: "10px", 
        padding: "5px",

    },
    likeCount: {
        color: Theme.palette.text.hint,
        fontSize: "0.9rem",
        marginLeft: "0.5rem"
    },
    tweetImg: {
        width: "15rem", 
        height: "10rem",
        marginTop: "1rem",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    tweetImgShow: {
        width: "15rem", 
        height: "10rem",
        marginTop: "1rem",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
}));

export default useStyle;