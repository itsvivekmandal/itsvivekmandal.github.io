import logo from "./logo.svg";
import "./App.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    'path': "/",
    'element': <App />,
    'children': [
      {
        'path': '/:sectionId?',
        'element': <Body />
      }
      // {
      //   'path': '/about',
      //   'element': <About />
      // },
      // {
      //   'path': '/contact',
      //   'element': <Contact />
      // }
    ]
  }
], { basename: "/portfolio" });

export default router;
