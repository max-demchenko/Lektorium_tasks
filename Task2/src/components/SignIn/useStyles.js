import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        width: 280,
        height: 325,
        padding: 35,
        borderRadius: 7,
        boxShadow: "2px 5px 10px gray"
    },
    mainGridContainer: { height: "100%" },
    gridItem: { width: "100%" },
    title: {
        color: "rgb(45, 96, 190)",
        fontWeight: 700,
        fontSize: 35
    },
    smallText: {
        fontSize: 13,
        fontWeight: 400,
    },
    link: {
        fontSize: 13,
        marginBottom: 3,
        color: "rgb(45, 96, 190)",
        cursor: 'pointer'
    },
    input: {
        cursor: 'pointer'
    },
    button: {
        width: "100%",
        height: 35,
        background: "rgb(45, 96, 190)",
        cursor: 'pointer'
    },
    checkbox: {
        width: 10,
        height: 10,
        color: "rgb(45, 96, 190)",
        "&$checked": {
            color: "rgb(45, 96, 190)"
        },
    },
    checked: {},
    checkboxLabel: { fontSize: 13 },
    label: {
        margin: 0
    },
    signUpInstead: {
        margin: 20
    }
})



export default useStyles