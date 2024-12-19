/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const FileDisplay = ({ url, details }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  return (
    <>
      {url ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Your file is ready to share:
          </p>
          <h3 className="text-gray-900 font-medium truncate">
            {details?.name}
          </h3>
          <div className="flex items-center justify-center space-x-3">
            <a
              href={`${import.meta.env.VITE_BACKEND_URL}/api/file/${details?._id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-indigo-600 hover:text-indigo-800 transition"
            >
              {url}
            </a>
            <button
              onClick={copyToClipboard}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md"
            >
              Copy
            </button>
          </div>
        </div>
      ) : details?.error ? (
        <p className="text-red-500 text-center font-medium">{details.error}</p>
      ) : null}
    </>
  );
};

export default FileDisplay;
