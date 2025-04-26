import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ChatPDFProvider from "./context/ChatPDFContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChatPDFProvider>
      <App />
    </ChatPDFProvider>
  </StrictMode>
);
