import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import router from "./routes/Routes";

function App() {
  return (
    <div className="bg-black">
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </div>
  );
}

export default App;
