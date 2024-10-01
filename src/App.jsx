import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Router";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;