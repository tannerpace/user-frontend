import { makeStyles } from "@mui/styles";
const styles = makeStyles((theme) => ({
    card: {
        flexGrow: 1,
        overflow: "auto",
    },
    root: {
        padding: 0,
        height: "100%",
    },
    listItemText: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    primaryText: {
        fontSize: "1.6rem",
    },
    secondaryText: {
        fontSize: "1.2rem",
        fontWeight: 300,
    },
    listItem: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        paddingTop: 11,
        paddingBottom: 11,
        "&:hover": {
            cursor: "pointer",
        },
    },
    noDataImage: {
        width: "212px",
        marginTop: "80px",
    },
    noDataTitle: {
        marginBottom: theme.spacing(2),
        color: "#190D27",
        opacity: "0.48",
    },
    hidecard: {
        position: "absolute",
        top: "1000",
        left: "0",
        display: "none",
    },
}))

export default styles
