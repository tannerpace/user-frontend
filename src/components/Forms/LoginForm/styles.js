import { makeStyles } from "@mui/styles"
import { textAlign } from "@mui/system"
import ronephoto from "./ronephoto.png"


const styles = makeStyles((theme) => ({

    root: {
        color: theme.palette.secondary.contrastText
    },
    welcome: {
        textAlign: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        // color: theme.palette.primary.contrastText,
        color: theme.palette.secondary.main,
        margin: theme.spacing(3, 0, 1, 0),
        textShadow: "2px 2px 2px #000000"
    },

    loginHeader: {
        width: "100%",
        margin: "0 auto",
        fontSize: "2.5rem",
        textAlign: "center",
        padding: "1rem 0",
        color: theme.palette.primary.contrastText,
    },

    inputContainer: {
        backgroundImage: `url(${ronephoto})`,
        backgroundSize: "cover",
        backgroundPosition: "fill",
        backgroundRepeat: "no-repeat",
        width: "100%",
        justifyContent: "center",
        border: ".5px solid #000000",
    },
    feildContainer: {
        margin: "0 auto",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(10),

        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "fit",
        backgroundRepeat: "no-repeat",
        // height: "calc(100% - 800px)",
        width: "300px",
        justifyContent: "center",
        padding: "0px",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: "10px",

    },

    formHelperText: {
        position: "absolute",
        marginLeft: 0,
        color: theme.palette.error.main,
    },



    loginButton: {
        margin: "auto",
        marginTop: theme.spacing(2),
        height: "35px",
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.contrastText,
        textShadow: ".5px .5px .5px #000000",

        width: "180px",
        "&: hover": {

            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.secondary.dark,
        },
    },

    noAccount: {
        justifyContent: "center",
        fontSize: "1.2rem",
        lineHeight: "1.66",
        display: "flex",
        width: "100%",
        marginBottom: theme.spacing(3),
        alignContent: "flex-end",
        color: theme.palette.primary.contrastText,

        "&:hover": {
            cursor: "pointer",

        },
    },

    buttonRoot: {
        fontWeight: 500,
        textTransform: "uppercase",
        fontSize: "1.2rem",
        minHeight: 45,
    },

    orContainer: {
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(3, 0),
        backgroundImage: `linear-gradient(to right, ${theme.palette.divider} 30%, ${theme.palette.divider} 0%)`,
        backgroundPosition: "center",
        backgroundSize: "10px 1px",
        backgroundRepeat: "repeat-x",
        "& p": {
            display: "inline-block",
            padding: theme.spacing(0, 1),
            width: "auto",
            fontSize: "1rem",
            fontFamily: ["Roboto Mono", "monospace"].join(","),
            textAlign: "center",
            backgroundColor: "#fff",
        },
    },


}))

export default styles

