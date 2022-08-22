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
            const item1 = document.querySelector("#item1");
            const item2 = document.querySelector("#item2");
            const item3 = document.querySelector("#item3");
            const item4 = document.querySelector("#item4");
            const item5 = document.querySelector("#item5");
            const item6 = document.querySelector("#item6");
            const item7 = document.querySelector("#item7");
            const item8 = document.querySelector("#item8");
            const item9 = document.querySelector("#item9");
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

       
                for (var i = 1; i <= N; i++) {
                    $('#item'+i).on('click', function () {
                        console.log(i);
                        document.getElementById("full-title").innerHTML = pictures[0].title;
                        document.getElementById("author").innerHTML = 'Di ' + pictures[0].author + ' completato nel ' + pictures[0].date;
                        document.getElementById("full-description").innerHTML = pictures[0].description;                    
                        $('#full').attr('src', pictures[0].src);
                        $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                        $('#item-container').fadeTo("slow", 0.2);
                        $('.navbar').fadeTo("slow", 0.2);

                    })

                }
                


  



/* 
               item1.addEventListener("click", item1Click);
                function item1Click() {
                    document.getElementById("full-title").innerHTML = pictures[0].title;
                    document.getElementById("author").innerHTML = 'Di ' + pictures[0].author + ' completato nel ' + pictures[0].date;
                    document.getElementById("full-description").innerHTML = pictures[0].description;                    
                    $('#full').attr('src', pictures[0].src);
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
               }
               item2.addEventListener("click", item2Click);
                function item2Click() {
                    document.getElementById("full-title").innerHTML = pictures[1].title;
                    document.getElementById("author").innerHTML = 'Di ' + pictures[1].author + ' completato nel ' + pictures[1].date;
                    document.getElementById("full-description").innerHTML = pictures[1].description;
                    $('#full').attr('src', 'gallery/persistenza.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item3.addEventListener("click", item3Click);
                function item3Click() {
                    document.getElementById("full-title").innerHTML = pictures[2].title;
                    document.getElementById("author").innerHTML = 'Di ' + pictures[2].author + ' completato nel ' + pictures[2].date;
                    document.getElementById("full-description").innerHTML = pictures[2].description;
                    $('#full').attr('src', 'gallery/tsunami.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item4.addEventListener("click", item4Click);
                function item4Click() {
                    document.getElementById("full-title").innerHTML = pictures[3].title;
                    document.getElementById("author").innerHTML = 'Di ' + pictures[3].author + ' completato nel ' + pictures[3].date;
                    document.getElementById("full-description").innerHTML = pictures[3].description;
                    $('#full').attr('src', 'gallery/liberta.png');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item5.addEventListener("click", item5Click);
                function item5Click() {
                    document.getElementById("full-title").innerHTML = pictures[4].title;
                    document.getElementById("author").innerHTML = 'Di ' + pictures[4].author + ' completato nel ' + pictures[4].date;
                    document.getElementById("full-description").innerHTML = pictures[4].description;
                    $('#full').attr('src', 'gallery/fucilazione.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item6.addEventListener("click", item6Click);
                function item6Click() {
                    document.getElementById("full-title").innerHTML = pictures[5].title;
                    document.getElementById("author").innerHTML = 'Di ' + pictures[5].author + ' completato nel ' + pictures[5].date;
                    document.getElementById("full-description").innerHTML = pictures[5].description;
                    $('#full').attr('src', 'gallery/canipoker.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item7.addEventListener("click", item7Click);
                function item7Click() {
                    document.getElementById("full-title").innerHTML = pictures[6].title;
                    document.getElementById("author").innerHTML = 'Di ' + pictures[6].author + ' completato nel ' + pictures[6].date;
                    document.getElementById("full-description").innerHTML = pictures[6].description;                
                    $('#full').attr('src', 'gallery/isolagrande.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item8.addEventListener("click", item8Click);
                function item8Click() {
                    document.getElementById("full-title").innerHTML = pictures[7].title;
                    document.getElementById("author").innerHTML = 'Di ' + pictures[7].author + ' completato nel ' + pictures[7].date;
                    document.getElementById("full-description").innerHTML = pictures[7].description;
                    $('#full').attr('src', 'gallery/frutta.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }
                item9.addEventListener("click", item9Click);
                function item9Click() {
                    document.getElementById("full-title").innerHTML = pictures[8].title;
                    document.getElementById("author").innerHTML = 'Di ' + pictures[8].author + ' completato nel ' + pictures[8].date;
                    document.getElementById("full-description").innerHTML = pictures[8].description;
                    $('#full').attr('src', 'gallery/viandante.jpg');
                    $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 0.2);
                    $('.navbar').fadeTo("slow", 0.2);
                }

                escfull.addEventListener("mouseover", overXred);
                function overXred(){
                    $("#x-full").attr('src', 'img/x-red.png');
                }

                escfull.addEventListener("mouseout", outXnormal);
                function outXnormal(){
                    $("#x-full").attr('src', 'img/icons8-x-96.png');
                }
*/
                escfull.addEventListener("click", escfullClick);
                function escfullClick() {
                    $('#image-full').fadeOut("slow");// decidere se fadeIn, show o slideDown
                    $('#item-container').fadeTo("slow", 1);
                    $('.navbar').fadeTo("slow", 1);
                }

                
                
                for(var i = 1; i<=N; i++) {
                    document.getElementById("image-title"+i).innerHTML = pictures[i-1].title;
                    /*let desc = pictures[i-1].description;
                    let limit = desc.substring(0, 190);*/
                    document.getElementById("image-tag"+i).innerHTML = pictures[i-1].description;
                }
            }
            else {
                console.log("Il tuo Browser non supporta il riconoscimento vocale")
            }
        }
    )
};