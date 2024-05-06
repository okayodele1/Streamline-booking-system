import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import Faqs from './pages/Faqs';
import Admin from './pages/Admin';

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
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/faqs",
          element: <Faqs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
      ],
    },
  
  ]);

  return <RouterProvider router={router} />;
}



export default App
