import { Typography } from "@material-ui/core"
import Page from "pages/Page"

import useStyles from "./styles"

const Index = () => {
    const classes = useStyles()
    return (
        <Page>
            <Typography variant="h4">This is the generated index page</Typography>
        </Page>
    )
}

export default Index
