import { useContext, useState } from "react";
import AIChatBubble from "./AIChatBubble";
import UserChatBubble from "./UserChatBubble";
import { ChatPDFContextType } from "../utils/types";
import { ChatPDFContext } from "../context/ChatPDFContext";
import { environment } from "../utils/constants";

const Chat = () => {
  const { setPdfFile, messages, setMessages } = useContext(
    ChatPDFContext
  ) as ChatPDFContextType;
  const [message, setMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && message.trim() !== "") {
      handleSendMessage();
    }
  };
  const handleSendMessage = async () => {
    try {
      setMessages((prev) => [...prev, { role: "user", content: message }]);
      setMessage("");
      const response = await fetch(`${environment}/chat?message=${message}`);
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "system", content: data?.message, docs: data?.docs },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <div className="border-r-2 border-gray-300 relative pt-20 px-6">
      <div className="flex flex-col gap-4 pb-28 max-h-[calc(100vh-100px)] overflow-scroll scrollbar-none">
        {messages.map((message, index) => {
          if (message.role === "user") {
            return <UserChatBubble key={index} content={message.content} />;
          } else if (message.role === "system") {
            return (
              <AIChatBubble
                key={index}
                content={message.content}
                docs={message.docs}
              />
            );
          } else {
            return (
              <AIChatBubble
                key={index}
                content="Something went wrong. Please try again later."
                docs={[]}
              />
            );
          }
        })}
      </div>
      <div className="flex w-full items-center absolute bottom-0 bg-white p-4 gap-4 left-0">
        <input
          type="text"
          value={message}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          placeholder="Ask about the document..."
          className="w-full border border-slate-300 outline-none px-4 py-3 rounded-md"
        />
        <button
          className="bg-violet-100 p-3 rounded-full"
          onClick={handleSendMessage}
          disabled={!message.trim()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-violet-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>

        <div
          className="fixed left-4 top-4 bg-violet-100 p-3 rounded-full"
          onClick={() => setPdfFile("")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Chat;
