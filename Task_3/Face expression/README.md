# 1. Face Expression Recognition:

  ## a. EDA and Data Preprocessing: 
  setting standard 56 x 56 img size. Displaying one image from all classes/ different expression. 

  ## b. Data Augmentation: 
  Rescaling pixel values(normalization dividing by 255), applying random zoom, flipping images horizontally, random rotation etc., these transformations help enhance diversity of dataset for training, and hence help model generalize better by inducing variations it might encounter in real world data. Used this for better training since we had less images too. used `ImageDataGenerator` function. And applied only rescaling/normalization to test images.

  ## c. Model Selection: 
        1. used Transfer Learning approach on ResNet50 model. 
		2. CNN model.

  ## d. Model Building: 

  **1.** Transfer Learning approach on ResNet50 model.
  initialise model, loading pre-trained weights (trained on large image dataset 'imagenet') . I did not include the top (first and last) layers of these architectures and made custom output layer to match the number of expression classes. Froze the base model by making it non-trainable moreover used Global average pooling layer to reduce the dimensions, added a dropout layer for regularization effect, 2 dense fully connected layers with relu actions and finally a dense layer with softmax actiovation with number of neurons equal to num of different expression classes for prediction probability. 


  **2.** CNN model.
  A sequential 4 layer CNN blocks comprising of Conv2d layer with same padding to maintain dimensions but 2^n filters to increase the volume dimension, Batch normalization for faster training and avoid exploding/diminishing gradients, relu activation, maxPooling to reduce dimension by 2. Flattening and using 2 dense layers also with batch normalization and dropout for regularization effect and output dense layer with softmax activation to output prediction probability of that particular image.

  ## e. Complilation: used Adam optimizer (probably the best) which utilizes RMSprop and Momentum prop. Loss function used categorical crossentropy for multiclass classification, and accuracy for model evaluation. Used Learning Rate Scheduler for faster convergence, by initializing a bigger lr value and exponentially decaying it. 

  ## f. Training: model trained for a few epochs, hyperparameter adjusting etc.

  ## e. Evaluation of model on test dataset to measure its accuracy and performance.