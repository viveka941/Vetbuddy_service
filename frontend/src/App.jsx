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

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/dashboard/:id", element: <UserDashboard /> },
    { path: "/appointementbook/:id", element: <AppointementForm /> },
    { path: "/donate", element: <Donation /> },
    { path: "/adopt", element: <Adoption /> },
    { path: "/volunteer", element: <Volunteer /> }
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
