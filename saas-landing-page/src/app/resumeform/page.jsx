"use client";

import React, { useState, useRef } from "react";
import { Upload, CheckCircle, X, File } from "lucide-react";

const ResumeUploadForm = () => {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleFile = (selectedFile) => {
    setError("");

    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      setError("Please upload PDF files only");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("File size should be less than 5MB");
      return;
    }

    setFile(selectedFile);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current.click();
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white p-4 md:p-8">
      <div className="w-full max-w-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-400 mb-2">
            Upload Your Resume
          </h1>
          <p className="text-gray-400">
            Upload your resume to get started with your application
          </p>
        </div>

        <div
          className={`relative border-2 border-dashed rounded-xl p-8 transition-all ${
            dragActive
              ? "border-blue-500 bg-blue-900/20"
              : "border-gray-700 hover:border-blue-400"
          } ${file ? "bg-blue-900/10" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="application/pdf"
            onChange={(e) => handleFile(e.target.files[0])}
          />

          {!file ? (
            <div className="flex flex-col items-center justify-center py-4">
              <div className="bg-blue-500/20 p-4 rounded-full mb-4">
                <Upload className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-center mb-2 font-medium text-lg">
                Drag & drop your resume here
              </p>
              <p className="text-center text-gray-400 text-sm mb-6">
                Support PDF files only (max 5MB)
              </p>
              <button
                onClick={onButtonClick}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-all shadow-md shadow-blue-500/20"
              >
                Select File
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <File className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-medium truncate max-w-xs">{file.name}</p>
                  <p className="text-gray-400 text-sm">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              <button
                onClick={removeFile}
                className="p-1 hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-3 text-red-500 text-sm flex items-center">
            <X className="w-4 h-4 mr-1" />
            {error}
          </div>
        )}

        <div className="mt-8">
          <button
            className={`w-full py-3 rounded-lg font-medium transition-all ${
              file
                ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/30"
                : "bg-gray-800 text-gray-400 cursor-not-allowed"
            }`}
            disabled={!file}
          >
            {file ? (
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Submit Resume
              </div>
            ) : (
              "Upload Resume to Continue"
            )}
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-500 text-sm">
            By uploading, you agree to our{" "}
            <span className="text-blue-400 cursor-pointer">
              Terms of Service
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadForm;
