import file from "../models/fileModels.js";
import path from "path";

// File Upload Controller
export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, error: "No file uploaded" });
    }

    const { originalname, path: filePath } = req.file;

    const newFile = new file({ name: originalname, path: filePath });
    await newFile.save();

    res.status(200).json({
      message: "File uploaded successfully",
      success: true,
      file: newFile,
      path: `${process.env.BACKEND_URL}/file/${newFile._id}`,
    });
  } catch (error) {
    console.error("Error in File Upload:", error.message);
    res.status(500).json({ success: false, error: "Failed to upload file" });
  }
};

// File Download Controller
export const downloadFile = async (req, res) => {
  try {
    const { id } = req.params;
    const newFile = await file.findById(id);

    if (!newFile) {
      return res.status(404).json({ success: false, error: "File not found" });
    }

    // Increment the download count
    newFile.downloadContent++;
    await newFile.save();

    // Serve the file for download
    const absolutePath = path.resolve(newFile.path);
    res.download(absolutePath, newFile.name, (err) => {
      if (err) {
        console.error("Error in File Download:", err.message);
        res
          .status(500)
          .json({ success: false, error: "Failed to download file" });
      }
    });
  } catch (error) {
    console.error("Error in File Download Route:", error.message);
    res.status(500).json({ success: false, error: "Failed to fetch file" });
  }
};
