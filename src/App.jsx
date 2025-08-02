import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import router from "./routes/Routes";

function App() {
  return (
    <RouterProvider router={router}>
      <MainLayout />
    </RouterProvider>
  );
}

export default App;
