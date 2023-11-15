import "./App.css";
import Layout from "./layput/Layout";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
