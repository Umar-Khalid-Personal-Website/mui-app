import Home from "./components/Home/Home"
import About from "./components/Header/About/About"
import { createBrowserRouter } from "react-router-dom";
import Contacts from "./components/Header/About/contacts";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path:"/Contacts",
      element: <Contacts/>
    },
    {
      path:"/About",
      element: <About/>
    },
    {
      path: "/Body",
      element: <Body/>
    },
    {
      path: "/Footer",
      element: <Footer/>
    }
   
     
  ]);

  export default router