/*let img;
let detector;

function preload() {
    img = loadImage('gallery/canipoker.jpg');
    detector = m15.objectDetector('cocossd');
    
}

function setup() {
    createCanvas(640, 480);
    console.log(detector);
    Image(imgg, 0, 0)
}

*/

    // Notice there is no 'import' statement. 'cocoSsd' and 'tf' is
    // available on the index-page because of the script tag above.

    const img = document.getElementById('image-main5');

    // Load the model.
    cocoSsd.load().then(model => {
        // detect objects in the image.
        model.detect(img).then(predictions => {
            console.log('Predictions: ', predictions);
        });
    });

