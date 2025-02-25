import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Toaster
      position="top-right"
      reverseOrder={true}
      toastOptions={{
        error: {
          style: {
            borderRadius: "4px",
            backgroundColor: "#2c2c2c", // Dark background
            color: "#ff6b6b", // Professional error red
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Subtle shadow
          },
        },
        success: {
          style: {
            borderRadius: "4px",
            backgroundColor: "#2c2c2c", // Dark background
            color: "#4caf50", // Professional success green
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Subtle shadow
          },
        },
        duration: 1500, // Slightly longer duration for better visibility
      }}
    />
  </>
);
