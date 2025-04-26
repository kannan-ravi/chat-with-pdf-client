import { createContext, FC, ReactNode, useState } from "react";
import { ChatPDFContextType, messageType, pdfFileType } from "../utils/types";
export const ChatPDFContext = createContext<ChatPDFContextType | null>(null);

const ChatPDFProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [pdfFile, setPdfFile] = useState<pdfFileType>('');
  const [messages, setMessages] = useState<messageType[]>([]);


  return (
    <ChatPDFContext.Provider
      value={{
        pdfFile,
        setPdfFile,
        messages,
        setMessages,
      }}
    >
      {children}
    </ChatPDFContext.Provider>
  );
};

export default ChatPDFProvider;
