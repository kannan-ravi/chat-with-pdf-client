import LoadingImage from "../assets/loading.svg";
const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 sm:p-10 shadow-2xl rounded-lg bg-white max-w-80 w-full">
      <div className="flex items-center justify-start w-full">
        <div className="text-violet-500 flex justify-center items-center gap-2">
          <div className="w-9 h-9">
            <img src={LoadingImage} alt="loading" />
          </div>
          <p className="text-lg font-medium">Uploading PDF</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
