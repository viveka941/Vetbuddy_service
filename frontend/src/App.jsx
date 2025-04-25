import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/user/Register";
import Login from "./component/user/Login";
import UserDashboard from "./component/user/UserDashboard";
import AppointementForm from "./component/user/AppointementForm";
import Donation from "./component/Donation";
import Adoption from "./component/Adoption";
import Volunteer from "./component/Volunteer";
<<<<<<< HEAD
import Resources from "./component/Resources";
import About from "./component/About";
import Pages from "./component/Pages";
=======
>>>>>>> upstream/main

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/dashboard/:id", element: <UserDashboard /> },
    { path: "/appointementbook/:id", element: <AppointementForm /> },
    { path: "/donate", element: <Donation /> },
    { path: "/adopt", element: <Adoption /> },
<<<<<<< HEAD
    { path: "/volunteer", element: <Volunteer /> },
    { path: "/resources", element: <Resources /> },
    { path: "/about", element: <About /> },
    { path: "/pages", element: <Pages /> }
=======
    { path: "/volunteer", element: <Volunteer /> }
>>>>>>> upstream/main
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
