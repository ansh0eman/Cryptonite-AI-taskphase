import React from "react";

export default function FileBox({ file1, file2 }) {
  return (
    <>
      <div className="px-4 py-2 mt-8 rounded text-white shadow-md flex flex-col gap-2 bg-emerald-300 bg-opacity-50 backdrop-blur-md">
        <div className="flex justify-center items-center font-bold">
          <p className="text-lg">FILES:</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="pr-6">{file1.name}</span>
          <a
            href={file1.url}
            download={file1.name}
            className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded"
          >
            Download
          </a>
        </div>
        <div className="flex items-center justify-between">
          <span>{file2.name}</span>
          <a
            href={file2.url}
            download={file2.name}
            className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded"
          >
            Download
          </a>
        </div>
      </div>
    </>
  );
}
