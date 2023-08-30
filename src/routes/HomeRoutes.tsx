import { createBrowserRouter } from "react-router-dom";
import { Home } from "../layout";
import HomeComp from "../pages/HomePages/HomeComp";


export const element = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    }
])