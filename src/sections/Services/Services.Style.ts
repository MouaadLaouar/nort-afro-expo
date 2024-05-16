import { StyleKey } from "../../types";

export const Style: StyleKey = {
    Services: {
        backgroundColor: '#083857',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    Text: {
        marginTop: "40px",
        marginBottom: "20px",
        fontSize: "90px",
        color: "white"
    },
    Cards: {
        margin: 3,
    },
    Pic: {
        borderRadius: '3px 3px 0px 0px',
        width: '100%'
    },
    Title: {
        my: 4,
        color: 'white',
    },
    Desc: {
        color: 'white',
    },
    Card: {
        width: {
            lg: '250px',
            base: '150px'
        }
    }
}