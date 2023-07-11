import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-slate-900">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
