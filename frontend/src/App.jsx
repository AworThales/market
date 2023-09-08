import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/mygigs/myGigs";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import "./App.scss";
import Register from "./pages/register/Rigister";
import Login from "./pages/login/Login";



function App() {

  const Layout = () => {
    return (
     <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
     </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/gig/:id",
          element: <Gig />
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
        {
          path: "/mygigs",
          element: <MyGigs />
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register />
        },
      ]
    },
  ]);

  return (
    <div className="main">
      <RouterProvider router={router} />
      
      
    </div>
    
  )
}

export default App
