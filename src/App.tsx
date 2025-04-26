import { useContext } from "react";
import PDFChat from "./components/PDFChat";
import PDFUpload from "./components/PDFUpload";
import { ChatPDFContextType } from "./utils/types";
import { ChatPDFContext } from "./context/ChatPDFContext";

function App() {
  const { pdfFile } = useContext(ChatPDFContext) as ChatPDFContextType;

  return pdfFile ? <PDFChat /> : <PDFUpload />;
}

export default App;
