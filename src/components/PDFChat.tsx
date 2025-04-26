import Chat from "./Chat";
import PDFViewer from "./PDFViewer";

const PDFChat = () => {
  return (
    <div className="grid grid-cols-2 bg-slate-50 w-screen min-h-screen over">
      <Chat />
      <PDFViewer />
    </div>
  );
};

export default PDFChat;
