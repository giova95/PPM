let requestURL = './gallery.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const pictures = request.response;
    console.log(pictures);

    document.addEventListener(
        'DOMContentLoaded',
        function () {

            console.log(" DOM caricato");

            const searchForm = document.querySelector("#search-form");
            const formInput = document.querySelector("#search-form input");
            const micBtn = document.querySelector("#search-form button");
            const micIcon = document.querySelector("#mic1");
            var N = pictures.length;
            const search = document.querySelector(".vocal-search");
            const esc = document.querySelector("#x-icon");
            const escfull = document.querySelector("#x-full");

            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

            var rec = false;

            if (SpeechRecognition) {
                console.log("Il tuo Browser supporta il riconoscimento vocale");

                const recognition = new SpeechRecognition();
                recognition.interimResults = true;
                recognition.continuos = true;
                recognition.lang = "it-IT"

                micBtn.addEventListener("click", micBtnClick);
                function micBtnClick() {
                    if (!rec) {
                        recognition.start();

                    }
                    else {
                        recognition.stop();
                    }
                    console.log(rec);
                }

                search.addEventListener("click", searchClick);  //TODO fare l'animazione
                function searchClick() {
                    $('.menu').css({
                        'visibility': 'hidden'
                    });

                    $('.vocal-search').css({
                        'visibility': 'hidden'
                    });

                    $('#search-box').css({
                        'visibility': 'visible'
                    });
                }

                esc.addEventListener("click", escClick);
                function escClick() {
                    $('.menu').css({
                        'visibility': 'visible'
                    });

                    $('.vocal-search').css({
                        'visibility': 'visible'
                    });

                    $('#search-box').css({
                        'visibility': 'hidden'
                    });
                }

                recognition.addEventListener("start", startSpeechRecognition);
                function startSpeechRecognition() {

                    $('.mic1').attr('src', 'img/mic-red.png');
                    rec = true;
                    formInput.focus();
                    console.log("Riconoscimento vocale attivato");

                }

                recognition.addEventListener("end", endSpeechRecognition);
                function endSpeechRecognition() {
                    $('.mic1').attr('src', 'img/mic.png');
                    rec = false;
                    formInput.focus();
                    console.log("Riconoscimento vocale disattivato");

                }

                recognition.addEventListener("result", resultSpeechRecognition);
                function resultSpeechRecognition(event) {
                    const transcript = event.results[0][0].transcript;
                    formInput.value = transcript;
                }


                for (let i = 1; i <= N; i++) {
                    item = document.querySelector("#item" + i);
                    item.addEventListener("click", itemClick);
                    function itemClick() {
                        document.getElementById("full-title").innerHTML = pictures[i-1].title;
                        document.getElementById("author").innerHTML = 'Di ' + pictures[i-1].author + ' completato nel ' + pictures[i-1].date;
                        document.getElementById("full-description").innerHTML = pictures[i-1].description;
                        $('#full').attr('src', pictures[i-1].src);
                        $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                        $('#item-container').fadeTo("slow", 0.2);
                        $('.navbar').fadeTo("slow", 0.2);
                    }
                }

                escfull.addEventListener("mouseover", overXred);
                function overXred() {
                    $("#x-full").attr('src', 'img/x-red.png');
                }
                escfull.addEventListener("mouseout", outXnormal);
                function outXnormal() {
                    $("#x-full").attr('src', 'img/icons8-x-96.png');
                }
                escfull.addEventListener("click", escfullClick);
                function escfullClick() {
                    $('#image-full').fadeOut("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 1);
                    $('.navbar').fadeTo("slow", 1);
                }

                for (var i = 1; i <= N; i++) {
                    document.getElementById("image-title" + i).innerHTML = pictures[i - 1].title;
                    /*let desc = pictures[i-1].description;
                    let limit = desc.substring(0, 190);*/
                    document.getElementById("image-tag" + i).innerHTML = pictures[i - 1].description;
                }
            }
            else {
                console.log("Il tuo Browser non supporta il riconoscimento vocale")
            }
        }
    )
};