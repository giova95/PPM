let urlApi = 'http://localhost:3307';
let req = new XMLHttpRequest();
req.open('GET', urlApi);
req.responseType = 'json';
req.send();



req.onload = function () {
    const pictures = req.response;
    console.log(pictures);

    document.addEventListener(
        'DOMContentLoaded',
        function () {

            console.log(" DOM caricato");

            $(document).ready(function () {
                for (let i = 1; i <= N; i++) {
                    $("#image-main" + i).attr('src', pictures[i - 1].src);
                }
            });

            const searchForm = document.querySelector("#search-form");
            const formInput = document.querySelector("#search-form input");
            const micBtn = document.querySelector("#search-form button");
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

                for (let i = 1; i <= N; i++) {
                    var div = document.createElement("div");
                    div.className = "item";
                    div.id = "item" + i;
                    document.getElementById("item-container").appendChild(div);

                    var divImg = document.createElement("div");
                    divImg.className = "img-container";
                    div.appendChild(divImg);


                    var a = document.createElement("a");
                    a.href = "#";
                    divImg.appendChild(a);

                    var img = document.createElement("img");
                    img.className = "image-main";
                    img.id = "image-main" + i;
                    img.src = " ";
                    a.appendChild(img);

                    var info = document.createElement("div");
                    info.className = "image-info";
                    info.id = "image-info" + i;
                    div.appendChild(info);

                    var h3 = document.createElement("h3");
                    h3.className = "image-title";
                    h3.id = "image-title" + i;
                    h3.innerHTML = "IMAGE TITLE";
                    info.appendChild(h3);

                    var h4 = document.createElement("h4");
                    h4.className = "image-author";
                    h4.id = "image-author" + i;
                    h4.innerHTML = "AUTHOR";
                    info.appendChild(h4);

                    var h6 = document.createElement("h6");
                    h6.className = "image-date";
                    h6.id = "image-date" + i;
                    h6.innerHTML = "DATE";
                    info.appendChild(h6);

                    /*     var h7 = document.createElement("h7");
                         h7.className = "image-tags";
                         h7.id = "image-tags" + i;
                         h7.innerHTML = "TAGS";
                         info.appendChild(h7);
                         */

                    var infoIcon = document.createElement("img");
                    infoIcon.className = "infoIcon";
                    infoIcon.id = "infoIcon" + i;
                    infoIcon.src = "img/info.png";
                    divImg.appendChild(infoIcon);
                }



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


                search.addEventListener("click", searchClick);  //TODO fare i'animazione
                function searchClick() {
                    $('.menu').fadeOut('fast');

                    $('.vocal-search').fadeOut('fast');

                    $('#search-box').css({
                        'visibility': 'visible'
                    });

                    $("#search-box").animate({left: '754'});
                }

                esc.addEventListener("click", escClick);
                function escClick() {
                    $('.menu').fadeIn('fast');

                    $('.vocal-search').fadeIn('fast');

                    $("#search-box").animate({left: '1468px'});

                    setTimeout( unfadebox , 200);
                    function unfadebox() {$('#search-box').css({
                        'visibility': 'hidden'
                    });}

                    for (let i = 1; i <= N; i++){
                        $('#item'+i).css('display', 'block');
                    }
                }

                recognition.addEventListener("start", startSpeechRecognition);
                function startSpeechRecognition() {

                    $('.mic1').attr('src', 'img/mic-red.png');
                    rec = true;
                    formInput.focus();
                    console.log("Riconoscimento vocale attivato");
                    for (let i = 1; i <= N; i++){
                        $('#item'+i).css('display', 'block');
                    }
                }

                recognition.addEventListener("end", endSpeechRecognition);
                function endSpeechRecognition() {
                    $('.mic1').attr('src', 'img/mic.png');
                    rec = false;
                    formInput.focus();
                    console.log("Riconoscimento vocale disattivato");
                    var tagsrc = document.searchForm.q.value.toLowerCase();
                    for (let i = 1; i <= N; i++) {
                        var tagsearch = picture[i - 1].tags.search(tagsrc);
                        if (tagsearch == "-1") {
                            console.log("togli immagine" + picture[i - 1].id);
                            $('#item' + i).css('display', 'none');
                        }
                    }
                }

                recognition.addEventListener("result", resultSpeechRecognition);
                function resultSpeechRecognition(event) {
                    const transcript = event.results[0][0].transcript;
                    formInput.value = transcript;
                };

                for (let i = 1; i <= N; i++) {
                    item = document.querySelector("#image-main" + i);
                    if (item) {
                        item.addEventListener("click", itemClick);
                        function itemClick() {
                            title = document.getElementById("full-title");
                            author = document.getElementById("author");
                            desc = document.getElementById("full-description");
                            if (title && author && desc) {
                                title.innerHTML = pictures[i - 1].title;
                                author.innerHTML = 'Di ' + pictures[i - 1].author + ' completato nel ' + pictures[i - 1].date;
                                desc.innerHTML = pictures[i - 1].description;
                                $('#full').attr('src', pictures[i - 1].src);
                                $('#image-full').fadeIn("slow");// decidere se fadeIn, show o slideDown
                                $('#item-container').fadeTo("slow", 0.2);
                                $('.navbar').fadeTo("slow", 0.2);
                            }
                        }
                    }

                    iconInf = document.querySelector("#infoIcon" + i);
                    if (iconInf) {
                        iconInf.addEventListener("click", iconClick);
                        function iconClick() {

                            $('#image-info' + i).css({
                                'animation': 'fadeIn 500ms ease-out forwards'
                            });

                            $('#infoIcon' + i).css({
                                'display': 'none'
                            });
                        }
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

                for (let i = 1; i <= N; i++) {
                    title = document.getElementById("image-title" + i);
                    author = document.getElementById("image-author" + i);
                    date = document.getElementById("image-date" + i);
                    if (title && author && date) {
                        title.innerHTML = pictures[i - 1].title;
                        author.innerHTML = pictures[i - 1].author;
                        date.innerHTML = pictures[i - 1].date;
                    }
                }
            }
            else {
                console.log("Il tuo Browser non supporta il riconoscimento vocale")
            }
        }
    )
};