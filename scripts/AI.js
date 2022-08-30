
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
                    if (pictures[i - 1].tags)
                        pictures[i - 1].tags = pictures[i - 1].tags + " " + predictions[s].class;
                    else
                        pictures[i - 1].tags = predictions[s].class;

                }
            });
            
            

            for (let i = 1; i <= n; i++) {
                t = document.getElementById("image-tags" + i);
                if(t){
                    if(pictures[i - 1].tags)
                        t.innerHTML = "Tag: " + pictures[i-1].tags;
                    else
                        t.innerHTML = "Tag: ";
                }

                item = document.querySelector("#item" + i);
                if (item) {
                    item.addEventListener("click", itemClick);
                    function itemClick() {
                        tags = document.getElementById("tags");
                        if(tags){
                            if(pictures[i - 1].tags)
                                tags.innerHTML ="Tag: " + pictures[i-1].tags;
                            else
                                tags.innerHTML ="Tag: ";
                        }
                    }
                }
            }
        });
    }

    console.log(pictures);
};