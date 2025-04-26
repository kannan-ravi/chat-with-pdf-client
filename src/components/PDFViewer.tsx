import { useContext, useState } from "react";

import { pdfjs, Document, Page } from "react-pdf";

import type { PDFDocumentProxy } from "pdfjs-dist";
import { ChatPDFContextType } from "../utils/types";
import { ChatPDFContext } from "../context/ChatPDFContext";
import { environment } from "../utils/constants";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PDFViewer = () => {
  const { pdfFile } = useContext(ChatPDFContext) as ChatPDFContextType;
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }
  return (
    <div className="border-l-2 border-gray-300 overflow-y-scroll max-h-screen">
      <div className="w-full flex items-center justify-center py-8">
        <Document
          file={`${environment}/${pdfFile}`}
          onLoadSuccess={onDocumentLoadSuccess}
          className="shadow-2xl"
        >
          {Array.from(new Array(numPages), (_el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PDFViewer;
