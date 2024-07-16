# 1. Pokemon:

## a. Basic EDA: 
basic EDA operations on csv file to know about the dataset. unique values on type1 evolution, type2 evolution. Visualizing this information. unique and most frequent distribution of Type1 evolution, type2 evolution etc.

## b. Data Preprocessing and Data Augmentation: 
Label Encoding Type1 and Type2 evolution classes.

setting image size to standard to 120x120 pixels

Rescaling pixel values(normalization dividing by 255), applying random zoom, flipping images horizontally, random rotation etc.

Converting another column `img` to store img_to_array values. Conerted all images into its numerical equivalent pixel value. 

Splitting the dataset (wrt to Type1 and Type2 differently) into training and test sets.
NOTE: USED SAME RANDOM_STATE FOR BOTH AS X_TRAIN AND X_TEST SHOULD BE SAME


## c. Model Selection: 
		1. A CNN model. 
		2. Fully Connected Neural Networks.

## d. Model Building: 

**1. CNN model:**
3 Convolution Blocks with Conv2d layer 2^n filters to learn complex features at deeper layer and basic features in initial ones, relu activation, I also used l2 regularization to prevent overfitting in this and instead of random initialization of weights, used glorot uniform initialization of weights and bias to prevent vanishing/exploding gradients. followed by MaxPooling layer and dropout for regularization effect

then finally 3 dense layers with decrementing 2^n units with relu and final layer with number of classes of pokemon type1/type2 evolution with SoftMax activation. 

**2. Fully Connected Neural Network:**

After training the above architecture and looking through other notebooks for reference i realised the above architecture used was unnecessarily complex.

Hence i used 4 Fully Connected Dense Layers to make my prediction. 
steps: Flattening my input image, and passing through forwad propagation of dense neural networks and then making prediction from final layer with number of neurons equal to num of classes.

## e. Complilation: 
used Adam optimizer. Loss function used sparse categorical crossentropy (we use sparse categorical for integer target labels), and accuracy for model evaluation. 

## f. Training: 
model trained for a few epochs, hyperparameter adjusting etc.

## e. Evaluation 
of model on test dataset to measure its accuracy and performance.
