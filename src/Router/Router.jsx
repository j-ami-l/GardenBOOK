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
import Loading from "../Components/Loading";
import ERROR from "../Components/ERROR";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                index:true,
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
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
                element: <BrowseTips></BrowseTips>,
                hydrateFallbackElement: <Loading></Loading>,
                loader : ()=> fetch('https://garden-book-server-site-2.vercel.app/browsetips').then(res=>res.json())
            },
             {
                path: "/tipdetails/:id",
                loader : ({params}) => fetch(`http://localhost:5000/tipdetails/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>,
                element: <PrivateRouter>
                    <TipDetails></TipDetails>
                </PrivateRouter>
                
            },
            {
                path:'/exploregardener',
                element: <ExploreGardeners></ExploreGardeners>
            }
        ]
    },
    {
        path: '/*',
        element: <ERROR></ERROR>
    }
])