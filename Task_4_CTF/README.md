# Cat/Non-Cat Classifier with Hidden Flag in Activation Functions
## 1. Introduction
In this Capture The Flag (CTF) challenge, participants are presented with a trained neural network model designed for binary image classification (cat vs. non-cat). The challenge lies not in the classification task itself, but in extracting a hidden flag encoded within the activation functions of the neural network's architecture.
The flag is embedded into the model by mapping its binary representation into the activation functions of the hidden layers. Specifically, ReLU and Sigmoid activation functions are used, where ReLU corresponds to a binary 1 and Sigmoid corresponds to a binary 0. The participants’ task is to reverse-engineer the model to retrieve the hidden flag.
## 2. Model Architecture
The neural network model follows a straightforward architecture with two hidden layers:
Input Layer: Accepts images of dimensions 64x64 pixels with 3 color channels (RGB).
Hidden Layers:
The first hidden layer has 128 neurons, each using either a ReLU or Sigmoid activation function based on the flag's binary encoding.
The second hidden layer has 64 neurons, again using either a ReLU or Sigmoid activation function according to the binary flag.
Output Layer: A single neuron with a Sigmoid activation function, providing a probability score for binary classification (cat vs. non-cat).
The hidden layers encode the binary representation of the flag ansh0e in their activation functions.
## 3. Flag Encoding Method
The flag "ansh0e" is first converted to its ASCII binary representation:
String Flag: "ansh0e"
Binary Representation: 011000010110111001110011011010000011000001100101
This binary string is then used to decide the activation functions in the model:
ReLU: Represents binary 1.
Sigmoid: Represents binary 0.
For example, if the binary flag is 01100001, the first eight neurons in the hidden layer would use the following activation functions: Sigmoid, ReLU, ReLU, Sigmoid, Sigmoid, Sigmoid, Sigmoid, ReLU.
## 4. Training and Deployment
The model is trained using a standard binary cross-entropy loss function and the Adam optimizer. The training data consists of labeled images for cats and non-cats, with the network learning to classify the images effectively while the hidden flag remains embedded within the network’s structure.
After training, the model achieves satisfactory performance in classifying cat and non-cat images. The trained model is then provided as the artifact for the CTF challenge.
## 5. Hints for Participants
Inspect the Model Architecture: One of the first steps should be to thoroughly examine the structure of the neural network. Pay special attention to the hidden layers and their activation functions.
Understand Activation Functions: Participants should recognize that the flag might be encoded using the types of activation functions in the model. Familiarize yourself with ReLU and Sigmoid, and consider how their sequence might represent binary data.
Reverse-Engineer the Model: Consider reverse-engineering the model by programmatically inspecting the activation functions in the hidden layers. Python tools such as TensorFlow or Keras (with which the model was built) can be used to access and analyze the model’s layers.
Extract and Decode the Flag: Once you identify the sequence of activation functions, map them to binary digits (ReLU = 1, Sigmoid = 0) and convert this binary sequence back to ASCII to reveal the hidden flag.
## 6. Approaches Participants Can Take
Direct Inspection:
Load the model using TensorFlow/Keras and directly inspect the model layers. By examining each hidden layer, participants can extract the sequence of activation functions and decode the flag.
Scripted Analysis:
Write a Python script that automates the extraction of the activation functions from the hidden layers. The script can then convert the extracted binary sequence into the ASCII string representing the flag.
Model Visualization:
Use visualization tools such as Netron to visualize the model architecture and identify patterns in the activation functions across the hidden layers.
Brute Force Approach:
If participants struggle to reverse-engineer the model, they could attempt to brute-force the binary sequence by systematically testing possible combinations of ReLU and Sigmoid in the hidden layers, though this is less efficient.
Model Testing:
Participants might try to pass specific inputs through the model to observe the activations, although this approach is more challenging and indirect.
## 7. Conclusion
This CTF challenge tests participants' ability to analyze and reverse-engineer neural networks, with a focus on understanding the relationship between model architecture and data encoding. By successfully extracting and decoding the flag hidden within the activation functions, participants will demonstrate their proficiency in neural network analysis and model inspection techniques. This challenge serves as an engaging and educational exercise in the intersection of machine learning and cybersecurity.
