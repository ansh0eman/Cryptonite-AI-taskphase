## 1. Dog Classifier:

  # a. Data Preprocessing: 
  Start by making train and validation (0.2 * dataset) sets directories, by splitting the dataset directory and copying images into train and validation sets. utilized `train_test_split` function, and used the stratify parameter on the number of classes (ie breed) to ensure the splitting is even and not skewed in respect to all the breed. 

  # b. Data Augmentation: 
  Rescaling pixel values(normalization), applying random zoom, flipping images horizontally, random rotation etc., these transformations help enhance diversity of dataset for training, and hence help model generalize better by inducing variations it might encounter in real world data. Used this for better training since we had less images too. used `ImageDataGenerator` function. And applied only rescaling/normalization to test images.

  # c. Model Selection: 
  used Transfer Learning approach on 3 different advanced architectures like InceptionV3, ResNet50, VGG16 models.

  # d. Model Building: 
  creating functions to initialise each models, loading pre-trained weights. I did not include the top (first and last) layers of these architectures and made custom output layer to match the number of dog breeds. Froze the base model by making it non-trainable moreover used Global average pooling layer to reduce the dimensions, added a dropout layer for regularization effect, 2 dense fully connected layers with relu actions and finally a dense layer with softmax actiovation with number of neurons equal to dog breeds for prediction probability. 

  # e. Complilation: 
  used Adam optimizer (probably the best) which utilizes RMSprop and Momentum prop. Loss function used categorical crossentropy for multiclass classification, and accuracy for model evaluation.

  # f. Training: 
  model trained for a few epochs, hyperparameter adjusting etc.

  # e. Evaluation: 
  of model on test dataset to measure its accuracy and performance.

NOTE: for ResNet Model I fine-tuned the model after training the base-model for anumber of epochs and then setting some few last layers as trainable to capture some complex features of the dataset, and trained it for a few epochs as well.