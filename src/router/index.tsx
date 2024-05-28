import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import GloBag from "../Partners/Bag";
import GloBuild from "../Partners/Build";
import Location from "../pages/Location";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: 'service/:serviceId',
        element: <Services />
    },
    {
        path: "/globalBuild",
        element: <GloBuild />
    },
    {
        path: "/globalBag",
        element: <GloBag />
    },
    {
        path: "/location",
        element: <Location   />
    },
    {
        path: '*',
        element: <div>404 Not Found</div>
    }

])

export default router;