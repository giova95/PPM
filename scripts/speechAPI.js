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
            const itemcontainer = document.querySelector("#item-container");
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
                    itemcontainer.appendChild(div);

                    var divImg = document.createElement("div");
                    divImg.className = "img-container";
                    div.appendChild(divImg);

                    var frame = document.createElement("img");
                    frame.id = "frame";
                    frame.src = "img/frame.png";
                    divImg.appendChild(frame);

                    var img = document.createElement("img");
                    img.className = "image-main";
                    img.id = "image-main" + i;
                    img.src = " ";
                    divImg.appendChild(img);

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

                    var infoIcon = document.createElement("img");
                    infoIcon.className = "infoIcon";
                    infoIcon.id = "infoIcon" + i;
                    infoIcon.src = "img/info.png";
                    divImg.appendChild(infoIcon);


                    if (i == N) {
                        var div = document.createElement("div");
                        div.className = "item-addedit";
                        div.id = "add-edit";
                        itemcontainer.appendChild(div);


                        var divImg = document.createElement("div");
                        divImg.className = "img-container";
                        div.appendChild(divImg);

                        var frame = document.createElement("img");
                        frame.id = "frame";
                        frame.src = "img/frame.png";
                        divImg.appendChild(frame);

                        var img = document.createElement("img");
                        img.className = "add-box";
                        img.src = "img/sfondo-bianco.jpg";
                        divImg.appendChild(img);

                        var a = document.createElement("a");
                        a.href = "newpic.html";
                        a.title = "Add picture";
                        divImg.appendChild(a);

                        var divadd = document.createElement("div");
                        divadd.id = "div-add";
                        a.appendChild(divadd);

                        var add = document.createElement("img");
                        add.id = "add";
                        add.src = "img/add.png";
                        divadd.appendChild(add);

                        var a = document.createElement("a");
                        a.href = "updatepic.html";
                        a.title = "Edit picture";
                        divImg.appendChild(a);

                        var divedit = document.createElement("div");
                        divedit.id = "div-edit";
                        a.appendChild(divedit);

                        var edit = document.createElement("img");
                        edit.id = "edit";
                        edit.alt = "Edit picture";
                        edit.src = "img/edit.png";
                        divedit.appendChild(edit);
                    }
                }

                window.onscroll = function(){ navSticky() };
                var navbar = document.querySelector("#navbar");
                var sticky = navbar.offsetTop;
                function navSticky(){
                    if(window.pageYOffset > sticky){
                        navbar.classList.add("sticky");
                    }else{
                        navbar.classList.remove("sticky");
                    }
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

                micBtn.addEventListener("mouseover", micBtnOver);
                function micBtnOver() {
                    $('.mic1').attr('src', 'img/mic-gray.png');
                }

                micBtn.addEventListener("mouseout", micBtnOut);
                function micBtnOut() {
                    if (!rec) {
                        $('.mic1').attr('src', 'img/mic.png');
                    } else {
                        $('.mic1').attr('src', 'img/mic-red.png');
                    }
                }

                search.addEventListener("click", searchClick);  //TODO fare i'animazione
                function searchClick() {
                    $('.menu').fadeOut('fast');

                    $('.vocal-search').fadeOut('fast');

                    $('#search-box').fadeIn('fast');

                    $("#navbar").css('border', 'none');
                }

                search.addEventListener("mouseover", searchselect);
                function searchselect() {
                    $('#search').css('color', '#949494');
                    $('#mic2').attr('src', 'img/mic-gray.png');
                }

                search.addEventListener("mouseout", searchunselect);
                function searchunselect() {
                    $('#search').css('color', '#000000');
                    $('#mic2').attr('src', 'img/mic.png');
                }

                esc.addEventListener("click", escClick);
                function escClick() {
                    $('.menu').fadeIn('fast');

                    $('.vocal-search').fadeIn('fast');

                    $('#search-box').fadeOut('fast');

                    $("#navbar").css('border-bottom', '1px solid lightgray');

                    /*setTimeout(unfadebox, 200);
                    function unfadebox() {
                        
                    }*/

                    for (let i = 1; i <= N; i++) {
                        $('#item' + i).css('display', 'block');
                    }
                }

                esc.addEventListener("mouseover", escselect);
                function escselect() {
                    $('#x-icon').attr('src', 'img/x-gray.png');
                }
                esc.addEventListener("mouseout", escunselect);
                function escunselect() {
                    $('#x-icon').attr('src', 'img/x.png');
                }

                recognition.addEventListener("start", startSpeechRecognition);
                function startSpeechRecognition() {

                    $('.mic1').attr('src', 'img/mic-red.png');
                    $('#mic1-mobile').attr('src', 'img/mic-red-mobile.png');
                    rec = true;
                    //formInput.focus();
                    console.log("Riconoscimento vocale attivato");
                    for (let i = 1; i <= N; i++) {
                        $('#item' + i).css('display', 'block');
                    }
                }

                recognition.addEventListener("end", endSpeechRecognition);
                function endSpeechRecognition() {
                    $('.mic1').attr('src', 'img/mic.png');
                    $('#mic1-mobile').attr('src', 'img/mic-mobile.png');
                    rec = false;
                    //formInput.focus();
                    console.log("Riconoscimento vocale disattivato");
                    let remove = 0;
                    var tagsrc = document.searchForm.q.value.toLowerCase();
                    for (let i = 1; i <= N; i++) {
                        var tagsearch = picture[i - 1].tags.search(tagsrc);
                        if (tagsearch == "-1") {
                            console.log("togli immagine" + picture[i - 1].id);
                            $('#item' + i).css('display', 'none');
                            remove++;
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
                                $('#image-full').slideDown();
                                $('#item-container').css("display", "none");
                                $('.navbar').fadeTo("slow", 0.2);
                            }
                        }
                    }

                    iconInf = document.querySelector("#infoIcon" + i);

                    iconInf.addEventListener("click", iconClick);
                    function iconClick() {

                        $('#image-info' + i).css({
                            'animation': 'fadeIn 500ms ease-out forwards'
                        });

                        $('#infoIcon' + i).css({
                            'display': 'none'
                        });
                    }

                    infoImg = document.querySelector("#image-info" + i);

                    infoImg.addEventListener("click", function(){
                        $('#image-info' + i).css({
                            'animation': 'fadeIn 500ms ease-out backwards'
                        });
                        
                        $('#infoIcon' + i).css({
                            'display': 'block'
                        });
                    })

                    
                }

                if (escfull) {
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
                        $('#image-full').slideUp();
                        $('#item-container').fadeTo("slow", 1);
                        $('.navbar').fadeTo("slow", 1);
                    }
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