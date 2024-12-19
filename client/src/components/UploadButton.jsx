/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';

const UploadButton = ({ setFile }) => {
  const fileInputRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <button
        onClick={onUploadClick}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
      >
        Upload File
      </button>
      <input
        type="file"
        ref={fileInputRef}
        hidden
        onChange={(e) => setFile(e.target.files[0])}
      />
    </>
  );
};

export default UploadButton;