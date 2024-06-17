import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import GloBag from "../Partners/Bag";
import GloBuild from "../Partners/Build";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <div>404 Not Found</div>,
    },
    {
        path: "service/:serviceId",
        element: <Services />,
    },
    {
        path: "/globalBuild",
        element: <GloBuild />,
    },
    {
        path: "/globalBag",
        element: <GloBag />,
    },

    {
        path: "*",
        element: <div>404 Not Found</div>,
    },
]);

export default router;
