import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Books />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/update",
      element: <Update />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
