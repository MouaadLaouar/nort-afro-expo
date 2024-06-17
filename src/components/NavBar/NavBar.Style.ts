import { StyleKey } from "../../types"

export const Style: StyleKey = {
    NavBar: {
       
        px: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    MenuDesktop: {
        display: {
            md: 'flex',
            base: 'none'
        },
        gap: 4,
    },
    Link: {
        p: 1,
        backgroundColor: 'white',
        '_hover': {
            backgroundColor: 'white'
        },
        fontWeight: "600",
    },
    MenuResponsive: {
        mt: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    Logo: {
        height: '120px'
    }
}