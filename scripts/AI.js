
    // Notice there is no 'import' statement. 'cocoSsd' and 'tf' is
    // available on the index-page because of the script tag above.

    const img = document.getElementById('image-main7');

    // Load the model.
    cocoSsd.load().then(model => {
        // detect objects in the image.
        model.detect(img).then(predictions => {
            console.log(predictions.length);
            for(let i = 1; i<=predictions.lenght; i++){
                console.log(predictions[0].class);
            }
        });
    });
