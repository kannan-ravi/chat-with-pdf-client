export type isPDFPresentType = boolean;
export type pdfFileType = string;

export type ChatPDFContextType = {
  pdfFile: pdfFileType;
  setPdfFile: React.Dispatch<React.SetStateAction<pdfFileType>>;
  messages: messageType[];
  setMessages: React.Dispatch<React.SetStateAction<messageType[]>>;
};

export type Doc = {
  pageContent?: string;
  metadata?: {
    loc?: {
      pageNumber?: number;
    };
    source?: string;
  };
};

export type messageType = {
  role: "system" | "user";
  content?: string;
  docs?: Doc[];
};
