
const picture = req.response;

let n = picture.length;

window.onload = function () {

    for (let i = 1; i <= n; i++) {
        let img = document.getElementById('image-main' + i);
        let l = picture.tags[i - 1];

        // Load the model.
        if (!l) {
            cocoSsd.load().then(model => {
                // detect objects in the image.
                model.detect(img).then(predictions => {
                    let k = predictions.length;
                    for (let s = 0; s < k; s++) {
                        console.log(predictions[s].class);
                        /*if (picture[i - 1].tags)
                            picture[i - 1].tags = picture[i - 1].tags + " " + predictions[s].class;
                        else
                            picture[i - 1].tags = predictions[s].class;
                        */

                        if (l)
                            l = l + " " + predictions[s].class;
                        else
                            l = predictions[s].class;
                    }
                    picture[i - 1].tags = l;
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
    }

    console.log(picture);
};