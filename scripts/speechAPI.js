document.addEventListener(
    'DOMContentLoaded',
    function () {
        
        console.log(" DOM caricato");

        const searchForm = document.querySelector("#search-form");
        const formInput = document.querySelector("#search-form input");
        const micBtn = document.querySelector("#search-form button");
        const micIcon = document.querySelector("#mic1");
        const item1 = document.querySelector("#item1");
        const search = document.querySelector(".vocal-search");
        const esc = document.querySelector("#x-icon");

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
                    'display' : 'none'
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
                    'display' : 'block'
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
            function item1Click(){
                //TODO: x sul blocco per chiudere immagine con relativo jquery
                $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                $('#item-container').fadeTo("slow", 0.2);
            }
        }
        else {
            console.log("Il tuo Browser non supporta il riconoscimento vocale")
        }
    }
)