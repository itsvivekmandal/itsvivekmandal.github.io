import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
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
