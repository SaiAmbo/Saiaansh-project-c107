function startClassification()
{
    navigation.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jLnbCv1V8/', modelReady);
}

function modelReady(){
    classify.classify(gotResults);
}