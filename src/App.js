import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Outlet, createBrowserRouter } from "react-router-dom"; 
import Projetcs from "./components/Projetcs";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <main className="content"> */}
        <Outlet />
      {/* </main> */}
    </div>
  );
}

const router = createBrowserRouter([
  {
    'path': "/",
    'element': <App />,
    'children': [
      {
        'path': '/projects',
        'element': <Projetcs />
      }
    ]
  }
], { basename: "/portfolio" });

export default router;
