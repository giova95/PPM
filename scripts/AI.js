
const picture = req.response;

let n = picture.length;

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
                    if (picture[i - 1].tags)
                        picture[i - 1].tags = picture[i - 1].tags + " " + predictions[s].class;
                    else
                        picture[i - 1].tags = predictions[s].class;

                }
            });

            item = document.querySelector("#item" + i);
            if (item) {
                item.addEventListener("click", itemClick);
                function itemClick() {
                    tags = document.getElementById("tags");
                    if (tags) {
                        if (picture[i - 1].tags)
                            tags.innerHTML = "Tag: " + picture[i - 1].tags;
                        else
                            tags.innerHTML = "Tag: ";
                    }
                }
            }
        });
    }

    console.log(picture);
};