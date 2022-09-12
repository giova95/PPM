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
                    divImg.id = "img-container" + i;
                    div.appendChild(divImg);

                    var frame = document.createElement("img");
                    frame.className = "frame";
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
                        divImg.className = "img-containeraddedit";
                        div.appendChild(divImg);

                        var frame = document.createElement("img");
                        frame.className = "frame";
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

                window.onscroll = function () { navSticky() };
                var navbar = document.querySelector("#navbar");
                var sticky = navbar.offsetTop;
                function navSticky() {
                    if (window.pageYOffset > sticky) {
                        navbar.classList.add("sticky");
                    } else {
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
                    $('.menu').fadeTo("fast", 0);

                    $('.vocal-search').fadeTo("fast", 0);

                    $('#search-box').fadeIn('fast');

                    $("#navbar").css({ 'border': 'none', 'background': 'transparent' });
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
                    $('.menu').fadeTo("fast", 1);

                    $('.vocal-search').fadeTo("fast", 1);

                    $('#search-box').fadeOut('fast');

                    $("#navbar").css({ 'border-bottom': '1px solid lightgray', 'background': 'white' });

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
                                $('#image-full').slideDown("slow");
                                $('#item-container').fadeOut("slow");
                                $('.navbar').fadeTo("slow", 0.2);
                            }
                        }
                    }






                    iconInf = document.querySelector("#infoIcon" + i);

                    iconInf.addEventListener("click", iconClick);
                    function iconClick() {
                        var mq = window.matchMedia("(max-width: 1000px)");

                        if (mq.matches) {
                            $('#image-info' + i).css({
                                'animation': 'fadeIn 500ms ease-out forwards'
                            });

                            $('#infoIcon' + i).css({
                                'display': 'none'
                            });
                        }
                    }

                    infoImg = document.querySelector("#image-info" + i);
                    if (infoImg) {
                      /*  infoImg.addEventListener("mouseover", imgOver);

                        infoImg.addEventListener("mouseout", imgOut);*/

                        infoImg.addEventListener("click", function () {
                            var mq = window.matchMedia("(max-width: 1000px)");
                            if (mq.matches) {
                                $('#image-info' + i).css({
                                    'animation': 'fadeIn 500ms ease-out backwards'
                                });

                                $('#infoIcon' + i).css({
                                    'display': 'block'
                                });
                            }
                        })
                    }
                }
                
                const mediaQuery1 = window.matchMedia('(min-width: 1000px)');
                const mediaQuery2 = window.matchMedia('(max-width: 1000px)');

                function media1(e) {
                    for (let i = 1; i <= N; i++) {
                        img = document.querySelector('#img-container' + i);
                        if (e.matches) {
                            if (img) {
                                img.addEventListener("mouseover", imgOver);
                                function imgOver() {
                                    $('#img-container' + i).css({
                                        '-webkit-transform': 'scale(1.1)',
                                        /*Webkit: Scale up image to 1.2x original size*/
                                        '-moz-transform': 'scale(1.1)',
                                        /*Mozilla scale version*/
                                        '-o-transform': 'scale(1.1)',
                                        /*Opera scale version*/
                                        'box-shadow': '0px 0px 40px gray',
                                        /*CSS3 shadow: 30px blurred shadow all around image*/
                                        '-webkit-box-shadow': '0px 0px 40px gray',
                                        /*Safari shadow version*/
                                        '-moz-box-shadow': '0px 0px 40px gray'
                                        /*Mozilla shadow version*/
                                    })

                                    $('#image-info' + i).css({
                                        'animation': 'fadeIn 500ms ease-out forwards',
                                        '-webkit-transform': 'scale(1.1)',
                                        /*Webkit: Scale up image to 1.2x original size*/
                                        '-moz-transform': 'scale(1.1)',
                                        /*Mozilla scale version*/
                                        '-o-transform': 'scale(1.1)'
                                        /*Opera scale version*/
                                    });


                                }
                                img.addEventListener("mouseout", imgOut);
                                function imgOut() {
                                    $('#img-container' + i).css({
                                        '-webkit-transform': 'scale(1)',
                                        /*Webkit: Scale up image to 1.2x original size*/
                                        '-moz-transform': 'scale(1)',
                                        /*Mozilla scale version*/
                                        '-o-transform': 'scale(1)',
                                        /*Opera scale version*/
                                        'box-shadow': '0px 0px 0px gray',
                                        /*CSS3 shadow: 30px blurred shadow all around image*/
                                        '-webkit-box-shadow': '0px 0px 0px gray',
                                        /*Safari shadow version*/
                                        '-moz-box-shadow': '0px 0px 0px gray'
                                        /*Mozilla shadow version*/
                                    })
                                    $('#image-info' + i).css({
                                        'animation': 'fadeIn 500ms ease-out backwards',
                                        '-webkit-transform': 'scale(1)',
                                        /*Webkit: Scale up image to 1.2x original size*/
                                        '-moz-transform': 'scale(1)',
                                        /*Mozilla scale version*/
                                        '-o-transform': 'scale(1)'
                                        /*Opera scale version*/
                                    });
                                }

                            }
                        }else{
                            img.removeEventListener("mouseover", imgOver);
                            img.removeEventListener("mouseout", imgOut);
                        }
                    }


                }

                function media2(e){
                    for(let i =1; i <= N; i++) {
                        img = document.querySelector('#img-container' + i);
                        if(e.marches) {
                            if(img) {
                                img.removeEventListener("mouseover" , imgOver);
                                img.removeEventListener("mouseOut", imgOut);
                            }
                        }
                    }
                }

                mediaQuery1.addListener(media1);
                
                media1(mediaQuery1);

                mediaQuery2.addListener(media2);

                media2(mediaQuery2);



                /*             window.addEventListener("resize", function mediaquery() {
                                 var mq = window.matchMedia("(min-width: 1000px)");                        
                                 if (mq.matches) {
                                     $('.image-info').css({
                                         'animation': 'fadeIn 500ms ease-out backwards'
                                     });
             
                                     $('.infoIcon').css({
                                         'display': 'none'
                                     });
                                 }
                                 else {
                                     $('infoIcon').css({
                                         'display' : 'block'
                                     });
                                 }
                             });
                         
             */


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