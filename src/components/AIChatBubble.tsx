import { Doc } from "../utils/types";

type AIChatBubbleProps = {
  content: string | undefined;
  docs: Doc[] | undefined;
};
const AIChatBubble = ({ content, docs }: AIChatBubbleProps) => {
  return (
    <div className="flex justify-start w-full">
      <div className="bg-violet-100 py-3 px-6 rounded-md flex flex-col items-start gap-3">
        <div className="flex items-start gap-3">
          <div className="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>
          <p>{content}</p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          {docs?.map((doc, index) => (
            <p
              className="text-xs px-3 py-1 bg-violet-400 text-white rounded-sm uppercase tracking-wider"
              key={index}
            >
              page {doc?.metadata?.loc?.pageNumber}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIChatBubble;
