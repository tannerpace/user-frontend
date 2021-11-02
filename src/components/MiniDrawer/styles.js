import { makeStyles } from "@mui/styles";
import headerpic from "./headerpic.png"

const styles = makeStyles(theme => ({
    // root: {
    //     display: "flex",
    //     flexDirection: "column",
    //     height: "100%",
    //     width: "100%",
    //     backgroundColor: "#fafafa",
    //     padding: "0px",
    //     margin: "0px",

    // },

    top: {
        // display: "flex",
        // flexDirection: "row",
        // height: "100%",
        // width: "100%",
        // backgroundColor: "#fafafa",
        padding: "0px",
        margin: "0px",
        // justifyContent: "center",
        // alignItems: "center",
        // backgroundImage: `url(${headerpic})`,
        backgroundSize: "auto 500px",
        // backgroundRepeat: "no-repeat",
        backgroundPosition: "20% 64%",

        backgroundAttachment: "fixed",
    }
}));
export default styles;