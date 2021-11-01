import { Typography } from "@mui/material"
import animationData from "../../assets/404-lottie.json"
import Lottie from "react-lottie"

import useStyles from "./styles"

const NotFound = () => {
    const classes = useStyles()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    }
    return (
        <section className={classes.notFound}>
            <Lottie options={defaultOptions} height={400} width={400} />
            <div className={classes.textSection}>
                <Typography variant="h2" className={classes.text}>
                    No page matching that url
                </Typography>
            </div>
        </section>
    )
}

export default NotFound
