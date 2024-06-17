import { StyleKey } from "../../types";

export const Style: StyleKey = {
    Services: {
        backgroundColor: "#083756",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    Text: {
        marginTop: "40px",
        marginBottom: "20px",
        fontSize: {
            md: "70px",
            base: "40px",
        },
        color: "#01b5ec",
    },
    Cards: {
        marginBottom: "40px",
    },
    Pic: {
        width: "100%",
    },

    Title: {
        my: 4,
        color: "#01b5ec",
        textAlign: "center",
        fontWeight: "bold",
    },
    Desc: {
        color: "white",
    },
    Card: {
        width: {
            lg: "250px",
            base: "250px",
        },
    },
};
