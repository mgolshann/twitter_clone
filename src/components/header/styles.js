import { makeStyles } from "@material-ui/styles";


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
        fontWeight: 600,
        marginRight: "0.5rem",
    },
}));

export default useStyle;