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

            console.log(" DOM loaded");

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
            const maincontainer = document.querySelector(".main-container");
            const itemcontainer = document.querySelector("#item-container");


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

                    var a = document.createElement("a");
                    a.href = "deletepic.html";
                    a.title = "Add picture";
                    divImg.appendChild(a);

                    var pendel = document.createElement("div");
                    pendel.className = "pendel";
                    pendel.id = "pendel" + i;
                    a.appendChild(pendel);

                    var del = document.createElement("img");
                    del.className = "delete";
                    del.id = "delete" + i;
                    del.src = "img/Trash.png";
                    pendel.appendChild(del);

                    var a2 = document.createElement("a");
                    a2.href = "updatepic.html";
                    a2.title = "Add picture";
                    divImg.appendChild(a2);

                    var pendel2 = document.createElement("div");
                    pendel2.className = "pendel";
                    pendel2.id = "pendel" + i;
                    a2.appendChild(pendel2);

                    var pen2 = document.createElement("img");
                    pen2.className = "pencil";
                    pen2.id = "pencil" + i;
                    pen2.src = "img/Pencil.png";
                    pendel2.appendChild(pen2);

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

                search.addEventListener("click", searchClick);
                function searchClick() {
                    $('.menu').fadeTo("fast", 0);

                    $('.vocal-search').fadeTo("fast", 0);

                    $('#search-box').fadeIn('fast');

                    $('.suggestion').fadeIn('fast');

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
                    $('.suggestion').fadeOut('fast');

                    $("#navbar").css({ 'border-bottom': '1px solid lightgray', 'background': 'white' });
                    
                    $('.search-result').css({
                        'opacity': '0'
                    });
                    
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
                    $('.search-result').css({
                        'opacity': '0'
                    });
                    rec = true;
                    //formInput.focus();
                    console.log("Vocal search on");
                    for (let i = 1; i <= N; i++) {
                        $('#item' + i).css('display', 'block');
                    }
                }

                recognition.addEventListener("end", endSpeechRecognition);
                function endSpeechRecognition() {
                    $('.mic1').attr('src', 'img/mic.png');
                    $('#mic1-mobile').attr('src', 'img/mic-mobile.png');
                    $('.suggestion').fadeOut("slow");
                    $('.search-result').css({
                        'opacity': '1'
                    })
                    rec = false;
                    console.log("Vocal search off");
                    let remove = 0;
                    var tagsrc = document.searchForm.q.value.toLowerCase();
                    for (let i = 1; i <= N; i++) {
                        var tagsearch = picture[i - 1].tags.search(tagsrc);
                        if (tagsearch == "-1") {
                            console.log("remove image" + picture[i - 1].id);
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


                const mediaQuery = window.matchMedia('(min-width: 1000px)');




                mediaQuery.addListener(media);

                media(mediaQuery);

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
                    tag = document.getElementById("image-tag" + i)
                    
                    
                    if (title && author && date && tag) {
                        title.innerHTML = pictures[i - 1].title;
                        author.innerHTML = pictures[i - 1].author;
                        date.innerHTML = pictures[i - 1].date;
                        tag.innerHTML = "Tag: " + pictures[i - 1].tags;
                        console.log(pictures[i -1].id);
                    }
                }

        }
    )
};