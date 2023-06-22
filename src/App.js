import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-slate-900">
      <RouterProvider router={router} />
      {/* <Toaster></Toaster> */}
    </div>
  );
}

export default App;
