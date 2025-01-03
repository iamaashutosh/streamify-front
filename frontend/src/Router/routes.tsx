import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/RegisterPage";



const routes = createBrowserRouter([
    {
        path :'/',
        element:<Homepage/>
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