import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../layouts/Home";
import Login from "../layouts/Login";
import SignUp from "../layouts/Singup";
import PrivateRouter from "./PrivateRouter";
import ShareTip from "../layouts/ShareTip";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children:[
            {
                index:true,
                Component: Home,
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/signup',
                Component: SignUp
            },
            {
                path: '/sharetip',
                element: <PrivateRouter>
                    <ShareTip></ShareTip>
                </PrivateRouter>
            }
        ]
    }
])