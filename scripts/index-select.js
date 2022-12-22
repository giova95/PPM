let urlApi2 = 'http://localhost:3307';
let req = new XMLHttpRequest();
req.open('GET', urlApi2);
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
            var nImg;

            if(itemcontainer){


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
                    img.className = "image-mainup";
                    img.id = "image-main" + i;
                    img.src = " ";
                    divImg.appendChild(img);

                    var a = document.createElement("a");
                    a.href = "deletepic.html?id="+pictures[i-1].id;
                    a.title = "Delete Picture";
                    a.className = "delete-pic";
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
                    a2.href = "updatepic.html?id="+i;
                    a2.title = "Update picture";
                    divImg.appendChild(a2);

                    var pendel2 = document.createElement("div");
                    pendel2.className = "pendel2";
                    pendel2.id = "pendel" + i;
                    a2.appendChild(pendel2);

                    var pen2 = document.createElement("img");
                    pen2.className = "pencil";
                    pen2.id = "pencil" + i;
                    pen2.src = "img/Pencil.png";
                    pendel2.appendChild(pen2);
                }

                var idDelete = getUrlVars()["id"];
                console.log(idDelete);

                const formdelete = document.querySelector("#formDelete");
                formDelete.action = "http://localhost:3307/deletepic/"+idDelete;
            }
                var idEdit = getUrlVars()["id"];
                console.log(idEdit);
                var title = document.getElementById("title");
                if(title) {
                    title.value = pictures[idEdit - 1].title;
                }


                function getUrlVars() {
                    var vars = {};
                    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                        vars[key] = value;
                    });
                    return vars;
                }
            }
    )
};