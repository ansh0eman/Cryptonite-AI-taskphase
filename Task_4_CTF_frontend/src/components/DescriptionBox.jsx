import React from "react";

export default function DescriptionBox() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-40 backdrop-blur-md px-4 py-2 rounded-xl">
        <div className="flex flex-col justify-center items-center">
          <p className="text-black text-2xl font-header font-bold pb-1">
            Welcome to our CTF Challenge!
          </p>
          <p className="text-black text-md">
            You have been provided with the h5 and keras files for our model.
            The challenge lies not in the classification task itself, but in
            extracting a hidden flag encoded within the neural network's
            architecture. <br /> Model Architecture: <br /> The input layer
            accepts images of dimensions 64x64 pixels with 3 color channels
            (RGB). The model has 2 hidden layers. The first layer has 128 while
            the second one has 64 neurons. The output layer has single neuron with a Sigmoid
            activation function, providing a probability score for binary
            classification (cat vs. non-cat).
          </p>
        </div>
      </div>
    </>
  );
}
