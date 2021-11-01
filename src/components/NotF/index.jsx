import React from 'react'
import useStyles from "./styles"

export default function NotF() {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.body}>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <div className={classes.title}>
                            <h1>404</h1>
                        </div>
                        <div className={classes.subtitle}>
                            <h2>Page not found</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
