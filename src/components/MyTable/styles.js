import { makeStyles } from "@mui/styles";

const styles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950,
        backgroundColor: "#E2E7EF"
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },

    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    },
    idLink: {
        textDecoration: 'none',
        color: "#E2E7EF",
        position: 'relative',
    },
    name: {
        padding: '0px 10px',
        position: "absolute",
        top: "2",
        left: "5",
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    longName: {
        lineHeight: "15px !important",
    }
}));

export default styles;


