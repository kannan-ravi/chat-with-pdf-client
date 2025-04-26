import React, { useContext, useState } from "react";
import Loading from "./Loading";
import { ChatPDFContextType } from "../utils/types";
import { ChatPDFContext } from "../context/ChatPDFContext";
import { environment } from "../utils/constants";

const PDFUpload = () => {
  const { setPdfFile, pdfFile } = useContext(
    ChatPDFContext
  ) as ChatPDFContextType;
  const [isLoading, setIsLoading] = useState(false);
  const handlePDFUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("pdf-file", file);
      try {
        const response = await fetch(`${environment}/upload/pdf`, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        setPdfFile?.(data.filename);
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <div className="bg-slate-100 w-screen h-screen flex justify-center items-center">
      {isLoading && <Loading />}
      {!isLoading && !pdfFile && (
        <label
          htmlFor="pdf-file"
          className="flex flex-col justify-center items-center p-10 shadow-2xl rounded-lg bg-white"
        >
          <div className="rounded-full p-4 bg-violet-100 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-violet-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
          </div>
          <p className="font-semibold mt-4 mb-2 text-lg text-slate-800">
            Upload PDF to Start Chatting
          </p>
          <p className="text-sm text-slate-400">
            Click or drag and drop your file here
          </p>
          <input
            type="file"
            className="hidden"
            id="pdf-file"
            accept="application/pdf"
            onChange={handlePDFUpload}
          />
        </label>
      )}
    </div>
  );
};

export default PDFUpload;
