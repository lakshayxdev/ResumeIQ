import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster 
     position="top-center"
  toastOptions={{
    style: {
      background: "#111827",
      color: "#fff",
      border: "1px solid #334155",
    },
  }}
    />

    <BrowserRouter>
    <App />
    </BrowserRouter>
  </>
);