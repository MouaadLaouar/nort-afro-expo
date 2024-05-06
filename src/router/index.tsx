import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <div>404 Not Found</div>
    },
    {
        path: '/service/:serviceId',
        element: <Services />
    }
])

export default router;