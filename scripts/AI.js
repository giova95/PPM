
const pictures = req.response;

let n = pictures.length;

window.onload = function () {

    for (let i = 1; i <= n; i++) {
        let img = document.getElementById('image-main' + i);

    // Load the model.
    cocoSsd.load().then(model => {
        // detect objects in the image.
        model.detect(img).then(predictions => {
            let k = predictions.length;
            
            
            for (s = 0; s < k; s++) {
                console.log(predictions[s].class);
                pictures1[i-1].tags= predictions[s].class;
            }
        });
    });
}

    console.log(pictures);
};