import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.page";
import Shoes from "./pages/Shoes.page";
import EditShoe from "./pages/EditShoe.page";
import AddShoe from "./pages/AddShoe.page";
import { readShoesList, createShoe, updateShoe } from "./api/api";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/shoes", element: <Shoes />, loader: readShoesList },
  {
    path: "/:shoeid",
    element: <EditShoe />,
    action: updateShoe,
    loader: readShoesList,
  },
  { path: "/shoes/add", element: <AddShoe />, action: createShoe },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
