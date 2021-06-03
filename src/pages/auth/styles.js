import { makeStyles } from "@material-ui/styles";
import Theme from "../../components/theme";


const useStyle = makeStyles(theme=>({
    root: {
        backgroundColor: "white",
        width: "30rem",
        margin: "10rem auto",
        display: "flex",
        flexDirection: "column"
    },
    headerText: {
        margin: "1rem",
        alignSelf: "center"
    },
    tab: {
        flex: 1,
        fontFamily: "shabnam"
    },
    containerInput: {
        padding: "1rem 0.8rem",
        display: "flex",
        flexDirection: "column",
        marginTop: "1rem"
    },
}));

export default useStyle;