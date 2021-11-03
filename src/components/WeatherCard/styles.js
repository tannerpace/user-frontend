import { makeStyles } from "@mui/styles";

const styles = makeStyles(theme => ({
    weather__card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.dark,
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "100%",
            borderRadius: "0px",
            boxShadow: "none",
        },
    },
    weather__card__header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "10%",
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.contrastText,
        borderRadius: "10px 10px 0px 0px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "10%",
            borderRadius: "0px",
            boxShadow: "none",
        },
    },
    wind: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "0px",
    },

    icon: {
        width: "100%",
        height: "100%",
        padding: "10px",
    },

    weather__card__body__temp: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: "0px",
    }

}


));
export default styles; 