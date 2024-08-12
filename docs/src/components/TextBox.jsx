import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TextBox() {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const flag = "anshu";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === flag) {
      navigate("/success");
    } else {
      setErrorMessage("Incorrect flag :(");
    }
  };

  return (
    <>
      <div className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-white text-sm font-bold mb-2">
              Enter Flag:
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            {errorMessage && (
              <p className="text-red-500 text-xs italic pb-1">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
