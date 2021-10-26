import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles((theme) => ({
    subtitle: {
        color: theme.palette.primary.dark,
        fontSize: "1.4rem",
    },
    paper: {
        minWidth: "662px",
        minHeight: "600px",
        [theme.breakpoints.down("xs")]: {
            minWidth: "100%",
        },
    },
    saveButton: {
        marginLeft: theme.spacing(2),
    },
    btnLabel: {
        minWidth: "36px",
    },
    texfield: {
        marginTop: theme.spacing(4),
    },
}))

export default styles
