import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.page";
import Shoes from "./pages/Shoes.page";
import EditShoe from "./pages/EditShoe.page";
import AddShoe from "./pages/AddShoe.page";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/shoes", element: <Shoes /> },
  { path: "/:shoeid", element: <EditShoe /> },
  { path: "/shoes/add", element: <AddShoe /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
