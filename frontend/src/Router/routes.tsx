import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import Landingpage from "../pages/LandingPage";



const routes = createBrowserRouter([
    {
        path :'/',
        element:<Landingpage/>
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])

export default routes