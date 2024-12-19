/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from "react";
import UploadButton from "./components/UploadButton"; // New component
import FileDisplay from "./components/FileDisplay"; // New component

function App() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [details, setDetails] = useState(null);

  // Function to upload the file to the backend
  const uploadFile = async () => {
    if (!file) return;

    // Validate file size (example: max 5MB)
    const maxFileSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxFileSize) {
      setDetails({
        error: "File size exceeds 5MB limit. Please upload a smaller file.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", file.name);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Failed to upload the file.");

      const data = await response.json();
      setUrl(data?.path); // Set the file path returned by the backend
      setDetails(data?.file); // Set file details
    } catch (error) {
      console.error("Error in uploading file:", error);
      setDetails({ error: "Failed to upload the file. Please try again." });
    }
  };

  useEffect(() => {
    if (file) {
      uploadFile();
    }
  }, [file]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-gray-800 p-4 sm:p-6">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900">
          Simple File Sharing
        </h1>
        <p className="text-sm sm:text-base text-gray-700 text-center">
          Upload a file and share the download link instantly. Files are
          securely stored for easy sharing.
        </p>
        {/* Upload Button */}
        <UploadButton setFile={setFile} /> {/* New component */}
        {/* Display download link or error */}
        <FileDisplay url={url} details={details} /> {/* New component */}
      </div>
    </div>
  );
}

export default App;
