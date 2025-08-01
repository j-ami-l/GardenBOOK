import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../layouts/Home";
import Login from "../layouts/Login";
import SignUp from "../layouts/Singup";
import PrivateRouter from "./PrivateRouter";
import ShareTip from "../layouts/ShareTip";
import MyTips from "../layouts/MyTips";
import BrowseTips from "../layouts/BrowseTips";
import TipDetails from "../layouts/TipDetails";
import ExploreGardeners from "../layouts/ExploreGardeners";



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
            },
            {
                path: '/mytips',
                element: <PrivateRouter>
                    <MyTips></MyTips>
                </PrivateRouter>
            },
            {
                path : "/browsetips",
                Component: BrowseTips,
                loader : ()=> fetch('http://localhost:5000/browsetips')
            },
            {
                path: "/tipdetails/:id",
                loader : ({params}) => fetch(`http://localhost:5000/tipdetails/${params.id}`),
                element: <PrivateRouter>
                    <TipDetails></TipDetails>
                </PrivateRouter>
                
            },
            {
                path:'/exploregardener',
                Component: ExploreGardeners
            },
            
        
        ]
    }
])