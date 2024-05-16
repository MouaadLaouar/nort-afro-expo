import { StyleKey } from "../../types";


export const Style: StyleKey = {
    Hero: {
        // backgroundColor: '#d9d9d9',
        height: '70vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: `url(${hero}), linear-gradient(360deg, #083857, rgba(76, 175, 80, 0))`
    },
    Text: {
        fontSize: {
            md: '70px',
            base: '40px'
        },
        color: 'rgb(63,169,245)',
        textAlign: 'center'
    }
}