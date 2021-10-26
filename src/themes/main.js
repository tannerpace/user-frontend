import { createMuiTheme } from "@material-ui/core/styles"

const primary = {
    dark: "#830A48",
    main: "#4F6367",
    light: "#52FFB8",
}
const secondary = {
    main: "#FAB2EA",
    light: "#D0FEF5",
    dark: "#4A051C",
}
const error = {
    main: "#F84738",
}
const text = {
    primary: "#190e28",
}

const spacing = (factor) => factor * 8

export default createMuiTheme({
    spacing,
    palette: {
        primary,
        secondary,
        text,
        error,
    },
    typography: {
        fontFamily: ["Barlow", "sans-serif"].join(","),
        h1: {
            fontWeight: 700, // bold
            fontSize: "2.6rem",
        },
        h2: {
            fontWeight: 700, // bold
            fontSize: "2.4rem",
        },
        h3: {
            fontWeight: 700, // bold
            fontSize: "2.2rem",
        },
        h4: {
            fontWeight: 700, // bold
            fontSize: "2.0rem",
        },
        h5: {
            fontWeight: 700, // bold
            fontSize: "1.8rem",
        },
        h6: {
            fontWeight: 700, // bold
            fontSize: "1.6rem",
            lineHeight: 1,
        },
        subtitle1: {
            fontSize: "1.6rem",
        },
        subtitle2: {
            fontSize: "1.6rem",
            fontWeight: 600, // semi-bold
        },
        body1: {
            fontSize: "1.2rem",
        },
        body2: {
            fontSize: "1.2rem",
            fontWeight: 700, // bold
        },
        button: {
            fontSize: "1.4rem",
        },
        caption: {
            fontSize: "1.2rem",
        },
        overline: {
            fontSize: "1.2rem",
        },
    },
    props: {
        MuiAppBar: {
            elevation: 1,
        },
        MuiButton: {
            disableElevation: true,
        },
        MuiCheckbox: {
            color: "primary",
        },
        MuiRadio: {
            color: "primary",
        },
        MuiFilledInput: {
            disableUnderline: true,
        },
    },
    overrides: {
        MuiAvatar: {
            root: {
                border: "1px solid gray",
            },
        },
        MuiListItemAvatar: {
            root: {
                "& > img": {
                    border: "1px solid gray",
                },
            },
        },
        MuiAppBar: {
            colorDefault: {
                backgroundColor: "#fff",
            },
            colorSecondary: {
                backgroundColor: "#E2E7EF",
            },
        },
        MuiContainer: {
            root: {
                "@media (min-width: 600px)": {
                    padding: 30,
                },
            },
        },
        MuiPaper: {
            elevation1: {
                boxShadow: "0px 3px 6px #0000001A",
            },
        },
        MuiDialog: {
            paper: {
                width: "100%",
                borderRadius: 8,
                // height: '50%'
            },
            paperWidthSm: {
                maxWidth: 387,
            },
        },
        MuiDialogTitle: {
            root: {
                padding: "20px 24px",
            },
        },
        MuiDialogContent: {
            root: {
                padding: "20px 24px",
            },
        },
        MuiDialogActions: {
            root: {
                padding: "20px 24px",
            },
            spacing: {
                "& > :not(:first-child)": {
                    marginLeft: spacing(2),
                },
            },
        },
        MuiButton: {
            root: {
                borderRadius: 6,
                textTransform: "initial",
                fontWeight: 700,
                color: "#412A5D",
                fontSize: "1.6rem",
                padding: "4px 18px",
            },
            outlinedSizeSmall: {
                padding: "2px 9px",
            },
            containedSizeLarge: {
                padding: "10px 18px",
            },
            outlinedSizeLarge: {
                padding: "9px 18px",
            },
            outlined: {
                borderColor: "#412A5D",
            },
            sizeSmall: {
                fontSize: ["1.4rem", "!important"],
            },
            sizeLarge: {
                fontSize: ["1.6rem", "!important"],
            },
        },
        MuiIconButton: {
            root: {
                color: text.primary,
                fontSize: "2.4rem",
            },
            sizeSmall: {
                fontSize: "1.8rem",
            },
        },
        MuiSvgIcon: {
            root: {
                fontSize: "2.4rem",
            },
            fontSizeSmall: {
                fontSize: "2rem",
            },
            fontSizeLarge: {
                fontSize: "3.5rem",
            },
        },
        MuiCard: {
            root: {
                borderRadius: 6,
                border: "1px solid #E5E5E5",
                boxShadow: "0px 0px 10px #B2B2B21A",
            },
        },
        MuiCheckbox: {
            colorPrimary: {
                color: primary.main,
                "&.Mui-disabled": {
                    color: "#d297b5",
                },
            },
            colorSecondary: {
                color: secondary.main,
                "&.Mui-disabled": {
                    color: "#a4d4da",
                },
            },
        },
        MuiRadio: {
            colorPrimary: {
                color: primary.main,
                "&.Mui-disabled": {
                    color: "#d297b5",
                },
            },
            colorSecondary: {
                color: secondary.main,
                "&.Mui-disabled": {
                    color: "#a4d4da",
                },
            },
        },
        MuiFormLabel: {
            root: {
                fontSize: "1.6rem",
            },
        },
        MuiInputLabel: {
            outlined: {
                transform: "translate(14px, 13px) scale(1)",
            },
            filled: {
                "& ~ .MuiInputBase-root .MuiInputBase-input, & ~ .MuiInputBase-root .MuiInputBase-multiline":
                {
                    paddingTop: 27,
                },
                "&$marginDense": {
                    "& ~ .MuiInputBase-root .MuiInputBase-input, & ~ .MuiInputBase-root .MuiInputBase-multiline":
                    {
                        paddingTop: 22,
                    },
                },
            },
        },
        PrivateNotchedOutline: {
            legendLabelled: {
                fontSize: "1em",
            },
        },
        MuiInputBase: {
            input: {
                // minHeight: 19,
                fontSize: "1.6rem",
                // height: "initial",
            },
        },
        MuiFilledInput: {
            root: {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                borderRadius: [6, "!important"],
            },
            input: {
                padding: "10px 12px",
            },
            multiline: {
                padding: "10px 12px",
            },
        },
        MuiOutlinedInput: {
            input: {
                padding: "11.5px 14px",
            },
        },
        MuiTab: {
            wrapper: {
                justifyContent: "space-between",
                flexDirection: "row-reverse",
                alignItems: "center",
            },
            root: {
                fontWeight: 700,
                textTransform: "initial",
                padding: "6px 26px 6px 20px",
            },
            textColorInherit: {
                color: text.primary,
                opacity: 1,
            },
            textColorSecondary: {
                color: text.primary,
                "&.Mui-selected": {
                    color: secondary.dark,
                    backgroundColor: "#f0fafb",
                },
            },
            labelIcon: {
                minHeight: 48,
            },
        },
        PrivateTabIndicator: {
            vertical: {
                left: 0,
                right: "initial",
            },
            colorSecondary: {
                backgroundColor: secondary.dark,
            },
        },
        MuiBadge: {
            anchorOriginTopRightRectangle: {
                transform: "scale(1) translateY(-25%)",
            },
            badge: {
                padding: "0 4px",
                minWIdth: 15,
                height: 15,
                fontSize: "1rem",
            },
        },
        MuiListItemText: {
            primary: {
                fontSize: "1.6rem",
                fontWeight: 700,
                lineHeight: "1.6rem",
                marginBottom: 10,
            },
            secondary: {
                fontSize: "1.2rem",
                fontWeight: 300,
                color: text.primary,
                lineHeight: "1.2rem",
            },
        },
        MuiChip: {
            root: {
                height: "initial",
                paddingTop: 5,
                paddingBottom: 5,
            },
            label: {
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                paddingLeft: 5,
                paddingRight: 5,
                lineHeight: "1rem",
                color: "inherit",
            },
        },
        MuiPickersBasePicker: {
            pickerView: {
                maxWidth: "initial",
            },
        },
    },
})
