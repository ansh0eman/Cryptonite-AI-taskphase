import React from "react";
import FileBox from "./FileBox";
import TextBox from "./TextBox";

export default function MainSection() {
  const file1 = {
    name: "cat_noncat_model.h5",
    url: "/cat_noncat_model.h5",
  };

  const file2 = {
    name: "my_model.keras",
    url: "/my_model.keras",
  };

  return (
    <>
      <div className="flex justify-center items-center pt-6">
        <div className="grid grid-cols-3 gap-14 w-full max-w-6xl">
          {/* Left Boxes */}
          <div className="flex flex-col justify-between mt-10">
            <div className="h-32 border rounded mb-4">
              <p className="flex justify-center items-center font-header mt-2 text-lg">
                Hint 1:
              </p>
              <p className="px-3">
                Thoroughly examine the model! Pay special attention to the
                hidden layers.
              </p>
            </div>
            <div className="h-32 border rounded">
              <p className="flex justify-center items-center font-header mt-2 text-lg">
                Hint 2:
              </p>
              <p className="px-3">
                Familiarize yourself with ReLU and Sigmoid, and consider how
                their sequence might represent data.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center p-6 rounded shadow-lg">
            <FileBox file1={file1} file2={file2} />
            <TextBox />
          </div>

          {/* Right Boxes */}
          <div className="flex flex-col justify-between mt-10">
            <div className="h-32 border rounded mb-4">
              <p className="flex justify-center items-center font-header mt-2 text-lg">
                Hint 3:
              </p>
              <p className="px-3">
                Consider reverse-engineering the model by programmatically
                inspecting the activation functions
              </p>
            </div>
            <div className="h-32 border rounded">
              <p className="flex justify-center items-center font-header mt-2 text-lg">
                Hint 4:
              </p>
              <p className="px-3">
                If you find a binary sequence, why don't you try converting it
                to ASCII?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
