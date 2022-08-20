let requestURL = './gallery.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const picture = request.response;
    console.log(picture);

    document.addEventListener(
        'DOMContentLoaded',
        function () {

            console.log(" DOM caricato");

            const searchForm = document.querySelector("#search-form");
            const formInput = document.querySelector("#search-form input");
            const micBtn = document.querySelector("#search-form button");
            const micIcon = document.querySelector("#mic1");
            const item1 = document.querySelector("#item1");
            const item2 = document.querySelector("#item2");
            const item3 = document.querySelector("#item3");
            const item4 = document.querySelector("#item4");
            const item5 = document.querySelector("#item5");
            const item6 = document.querySelector("#item6");
            const item7 = document.querySelector("#item7");
            const item8 = document.querySelector("#item8");
            const item9 = document.querySelector("#item9");
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

                search.addEventListener("click", searchClick);
                function searchClick() {
                    $('.menu').css({
                        'display': 'none'
                    });

                    $('.vocal-search').css({
                        'display': 'none'
                    });

                    $('#search-box').css({
                        'display': 'block'
                    });
                }

                esc.addEventListener("click", escClick);
                function escClick() {
                    $('.menu').css({
                        'display': 'flex'
                    });

                    $('.vocal-search').css({
                        'display': 'block'
                    });

                    $('#search-box').css({
                        'display': 'none'
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

                item1.addEventListener("click", item1Click);
                function item1Click() {
                    $('#full').attr('src', 'gallery/canipoker.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item2.addEventListener("click", item2Click);
                function item2Click() {
                    $('#full').attr('src', 'gallery/fucilazione.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item3.addEventListener("click", item3Click);
                function item3Click() {
                    $('#full').attr('src', 'gallery/isolagrande.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item4.addEventListener("click", item4Click);
                function item4Click() {
                    $('#full').attr('src', 'gallery/liberta.png');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item5.addEventListener("click", item5Click);
                function item5Click() {
                    $('#full').attr('src', 'gallery/frutta.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item6.addEventListener("click", item6Click);
                function item6Click() {
                    $('#full').attr('src', 'gallery/persistenza.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item7.addEventListener("click", item7Click);
                function item7Click() {
                    $('#full').attr('src', 'gallery/primavera-di-botticelli.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item8.addEventListener("click", item8Click);
                function item8Click() {
                    $('#full').attr('src', 'gallery/tsunami.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item9.addEventListener("click", item9Click);
                function item9Click() {
                    $('#full').attr('src', 'gallery/viandante.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }

                escfull.addEventListener("click", escfullClick);
                function escfullClick() {
                    $('#image-full').fadeOut("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 1);
                    $('.navbar').fadeTo("slow", 1);
                }
            }
            else {
                console.log("Il tuo Browser non supporta il riconoscimento vocale")
            }
        }
    )
};