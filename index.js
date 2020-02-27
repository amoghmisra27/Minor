let InceptionV4;
let video;
let label = '';
// const model = await tf.loadLayersModel('https://foo.bar/tfjs_artifacts/model.json');
var inceptionV4='MobileNet';
// when model is ready make predictions
function modelReady() {
    console.log('Model is ready!!!');
   InceptionV4.predict(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        label = results[0].className;
        // loop the inference by calling itself
       InceptionV4.predict(gotResults);
    }
}

// setup function
function setup() {
    createCanvas(640, 550);
    // ml5 to create video capture
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    // load the InceptionV4 and apply it on video feed
   InceptionV4 = ml5.imageClassifier(inceptionV4, video, modelReady);
}

function draw() {
    background(0);
    // show video 
    image(video, 0, 0);
    fill(255);
    textSize(32);
    // show prediction label 
    text(label, 10, height - 20);
}
