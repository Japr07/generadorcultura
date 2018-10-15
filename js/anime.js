/*//////////////
///Imagenes/////
//////////////*/

let imagenes = 1;
let imgCount = 0;
let imgForm = "";
let imgHTML = "";

$("#imgBtn").click(function (e) {
    e.preventDefault();

    imgForm = "";

    let imgSave = new Array();
    let posicionImg;

    for (let i = 1; i <= imgCount; i++) {
        posicionImg = document.getElementById(`imagenes${[i]}`).value;
        imgSave.push(posicionImg);
    }

    imgCount++
    imagenes++;

    for (let i = 1; i < imagenes; i++) {
        imgForm += `<div class="input-group mt-2">
            <div class="input-group-prepend">
                <span class="input-group-text">Imagen ${[i+1]}:</span>
            </div>
            <input type="text" id="imagenes${[i]}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarImg">
            </div>
        </div>`
    };

    $("#imgExtra").html(imgForm);

    for (let i = 1; i < imgCount; i++) {
        document.getElementById(`imagenes${[i]}`).value = imgSave[i - 1];
    }
});

const borrarImg = $(".borrarInputImg");

$(borrarImg).on("click", ".borrarImg", function (e) {
    e.preventDefault();

    imgForm = "";
    imagenes--;

    let imgSave = new Array();
    let posicionImg;

    for (let i = 1; i <= imgCount; i++) {
        posicionImg = document.getElementById(`imagenes${[i]}`).value;
        imgSave.push(posicionImg);
    }

    imgSave.splice(imgSave.indexOf($(this).parent().prev().val()), 1);
    imgCount--;

    $(this).parent().parent().remove();

    for (let i = 1; i < imagenes; i++) {
        imgForm += `<div class="input-group mt-2">
            <div class="input-group-prepend">
                <span class="input-group-text">Imagen ${[i+1]}:</span>
            </div>
            <input type="text" id="imagenes${[i]}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarImg">
            </div>
        </div>`
    }

    $("#imgExtra").html(imgForm);

    for (let i = 0; i < imgCount; i++) {
        document.getElementById(`imagenes${[i+1]}`).value = imgSave[i];
    }
})

function mostrarImgHTML() {
    let $imagenes = new Array();
    imgHTML = "";

    for (let i = 0; i < imagenes; i++) {
        $imagenes.push(document.getElementById(`imagenes${[i]}`));
        imgHTML += `
        <img src="${$imagenes[i].value}">`;
    }
};

/*//////////////
///////URL//////
//////////////*/

let urls = 1;
let urlCount = 0;
let urlForm = "";
let urlHTML = "";

$("#urlBtn").click(function (e) {
    e.preventDefault();

    urlForm = "";

    let fansubSave = new Array();
    let urlSave = new Array();
    let servidorSave = new Array();

    let posicionFansub;
    let posicionUrl;
    let posicionServidor;

    for (let i = 1; i <= urlCount; i++) {
        posicionFansub = document.getElementById(`urlFansub${[i]}`).value;
        posicionUrl = document.getElementById(`urlDescarga${[i]}`).value;
        posicionServidor = document.getElementById(`urlServidorDescarga${[i]}`).value;

        fansubSave.push(posicionFansub);
        urlSave.push(posicionUrl);
        servidorSave.push(posicionServidor);
    }

    urlCount++;
    urls++;

    for (let i = 1; i < urls; i++) {
        urlForm += `<div class="input-group mt-2">
            <div class="input-group-prepend">
                <span class="input-group-text">Descarga:</span>
            </div>
            <input type="text" placeholder="Traduccion/Fansub" id="urlFansub${i}" class="form-control">
            <input type="text" placeholder="Descarga URL" id="urlDescarga${i}" class="form-control">
            <input type="text" placeholder="Servidor URL" id="urlServidorDescarga${i}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarUrl">
            </div>
        </div>`
    };

    $("#urlExtra").html(urlForm);

    for (let i = 1; i < urlCount; i++) {
        document.getElementById(`urlFansub${[i]}`).value = fansubSave[i - 1];
        document.getElementById(`urlDescarga${[i]}`).value = urlSave[i - 1];
        document.getElementById(`urlServidorDescarga${[i]}`).value = servidorSave[i - 1];
    }
});

const borrarUrl = $(".borrarInputUrl");

$(borrarUrl).on("click", ".borrarUrl", function (e) {
    e.preventDefault();

    urlForm = "";
    urls--;

    let fansubSave = new Array();
    let urlSave = new Array();
    let servidorSave = new Array();

    let posicionFansub;
    let posicionUrl;
    let posicionServidor;

    for (let i = 1; i <= urlCount; i++) {
        posicionFansub = document.getElementById(`urlFansub${[i]}`).value;
        posicionUrl = document.getElementById(`urlDescarga${[i]}`).value;
        posicionServidor = document.getElementById(`urlServidorDescarga${[i]}`).value;

        fansubSave.push(posicionFansub);
        urlSave.push(posicionUrl);
        servidorSave.push(posicionServidor);
    }

    fansubSave.splice(fansubSave.indexOf($(this).parent().prev().prev().prev().val()), 1)
    urlSave.splice(urlSave.indexOf($(this).parent().prev().prev().val()), 1)
    servidorSave.splice(servidorSave.indexOf($(this).parent().prev().val()), 1)

    urlCount--;

    $(this).parent().parent().remove();

    for (let i = 1; i < urls; i++) {
        urlForm += `<div class="input-group mt-2">
            <div class="input-group-prepend">
                <span class="input-group-text">Descarga:</span>
            </div>
            <input type="text" placeholder="Traduccion/Fansub" id="urlFansub${i}" class="form-control">
            <input type="text" placeholder="Descarga URL" id="urlDescarga${i}" class="form-control">
            <input type="text" placeholder="Servidor URL" id="urlServidorDescarga${i}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarUrl">
            </div>
        </div>`
    };

    $("#urlExtra").html(urlForm);

    for (let i = 1; i < urlCount; i++) {
        document.getElementById(`urlFansub${[i]}`).value = fansubSave[i - 1];
        document.getElementById(`urlDescarga${[i]}`).value = urlSave[i - 1];
        document.getElementById(`urlServidorDescarga${[i]}`).value = servidorSave[i - 1];
    }

});

function mostrarUrlHTML() {
    let $urlDescarga = new Array();
    let $urlFansub = new Array();
    let $urlServidor = new Array();

    urlHTML = "";

    for (let i = 0; i < urls; i++) {
        $urlDescarga.push(document.getElementById(`urlDescarga${[i]}`));
        $urlFansub.push(document.getElementById(`urlFansub${[i]}`));
        $urlServidor.push(document.getElementById(`urlServidorDescarga${[i]}`));
        urlHTML += `<tr>
            <td><a class="button blue" href="${$urlDescarga[i].value}"><i class="fa fa-download" aria-hidden="true"></i> Opción ${i+1}</a></td>
            <td>${$urlServidor[i].value}</td>
            <td>${$urlFansub[i].value}</td>
        </tr>`
    }
};

/*//////////////
/////Online/////
//////////////*/

let onlineCount = 0;
let onlineEnlaces = 0;
let onlineForm = "";
let onlineHTML = "";
let online = false;

$("#onlinebtn").click(function (e) {
    e.preventDefault();

    online = true;
    onlineForm = "";

    let onlineSaveFansub = new Array();
    let onlineSaveEnlace = new Array();
    let onlineSaveServidor = new Array();

    let posicionFansub;
    let posicionEnlace;
    let posicionServidor;


    for (let i = 0; i < onlineCount; i++) {
        posicionFansub = document.getElementById(`onlineFansub${[i]}`).value;
        posicionEnlace = document.getElementById(`onlineDescarga${[i]}`).value;
        posicionServidor = document.getElementById(`onlineServidorDescarga${[i]}`).value;

        onlineSaveFansub.push(posicionFansub);
        onlineSaveEnlace.push(posicionEnlace);
        onlineSaveServidor.push(posicionServidor);
    }

    onlineCount++;
    onlineEnlaces++

    for (let i = 0; i < onlineEnlaces; i++) {
        onlineForm += `<div class="input-group mt-2">
            <div class="input-group-prepend">
                <span class="input-group-text">Online:</span>
            </div>
            <input type="text" placeholder="Traduccion/Fansub" id="onlineFansub${[i]}" class="form-control">
            <input type="text" placeholder="Descarga URL" id="onlineDescarga${[i]}" class="form-control">
            <input type="text" placeholder="Servidor URL" id="onlineServidorDescarga${[i]}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarOnline">
            </div>
        </div>`
    }

    $("#online").html(onlineForm);

    for (let i = 1; i < onlineCount; i++) {
        document.getElementById(`onlineFansub${[i-1]}`).value = onlineSaveFansub[i - 1];
        document.getElementById(`onlineDescarga${[i-1]}`).value = onlineSaveEnlace[i - 1];
        document.getElementById(`onlineServidorDescarga${[i-1]}`).value = onlineSaveServidor[i - 1];

    }
});

const borrarOnline = $(".borrarInputOnline");

$(borrarOnline).on("click", ".borrarOnline", function (e) {
    e.preventDefault();

    onlineForm = "";
    onlineEnlaces--;

    let onlineSaveFansub = new Array();
    let onlineSaveEnlace = new Array();
    let onlineSaveServidor = new Array();

    let posicionFansub;
    let posicionEnlace;
    let posicionServidor;

    for (let i = 0; i < onlineCount; i++) {
        posicionFansub = document.getElementById(`onlineFansub${[i]}`).value;
        posicionEnlace = document.getElementById(`onlineDescarga${[i]}`).value;
        posicionServidor = document.getElementById(`onlineServidorDescarga${[i]}`).value;

        onlineSaveFansub.push(posicionFansub);
        onlineSaveEnlace.push(posicionEnlace);
        onlineSaveServidor.push(posicionServidor);
    }

    onlineSaveFansub.splice(onlineSaveFansub.indexOf($(this).parent().prev().prev().prev().val()), 1)
    onlineSaveEnlace.splice(onlineSaveEnlace.indexOf($(this).parent().prev().prev().val()), 1)
    onlineSaveServidor.splice(onlineSaveServidor.indexOf($(this).parent().prev().val()), 1)

    onlineCount--;

    $(this).parent().parent().remove();

    for (let i = 0; i < onlineCount; i++) {
        onlineForm += `<div class="input-group mt-2">
            <div class="input-group-prepend">
                <span class="input-group-text">Online:</span>
            </div>
            <input type="text" placeholder="Traduccion/Fansub" id="onlineFansub${[i]}" class="form-control">
            <input type="text" placeholder="Descarga URL" id="onlineDescarga${[i]}" class="form-control">
            <input type="text" placeholder="Servidor URL" id="onlineServidorDescarga${[i]}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarOnline">
            </div>
        </div>`
    }

    if (onlineCount == 0) {
        online = false;
    }

    $("#online").html(onlineForm);

    for (let i = 0; i < onlineCount; i++) {
        document.getElementById(`onlineFansub${[i]}`).value = onlineSaveFansub[i];
        document.getElementById(`onlineDescarga${[i]}`).value = onlineSaveEnlace[i];
        document.getElementById(`onlineServidorDescarga${[i]}`).value = onlineSaveServidor[i];

    }
})
let onlineMostrar;

function mostrarOnlineHTML() {
    if (online) {

        let $onlineServidor = new Array();
        let $onlineEnlace = new Array();
        let $onlineFansub = new Array();
        onlineHTML = "";

        if (onlineCount > 0) {
            for (let i = 0; i < onlineCount; i++) {
                $onlineServidor.push(document.getElementById(`onlineServidorDescarga${[i]}`));
                $onlineEnlace.push(document.getElementById(`onlineDescarga${[i]}`));
                $onlineFansub.push(document.getElementById(`onlineFansub${[i]}`));

                onlineHTML += `<tr>
                    <td><a class="button blue" href="${$onlineEnlace[i].value}"><i class="fa fa-download" aria-hidden="true"></i> Opción ${i+1}</a></td>
                    <td>${$onlineServidor[i].value}</td>
                    <td>${$onlineFansub[i].value}</td>
                </tr>`;
            }
        }
        onlineMostrar = `
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>Lista de Opciones</th>
                        <th>Servidor</th>
                        <th>Traducción</th>
                    </tr>
                </thead>
                <tbody>
                    ${onlineHTML}
                </tbody>
            </table>
        </div>
        `
    } else {
        onlineMostrar = "Online no disponible";
    }
}

/*//////////////
//Generar HTML//
//////////////*/
const generarHTML = document.getElementById("generarHTML");

generarHTML.addEventListener("click", function () {
    const idyoutube = document.getElementById("idyoutube");
    const imgPortada = document.getElementById("imgPortada");

    mostrarUrlHTML();
    mostrarOnlineHTML()

    let codigo = window.open("", "codigo", "width=600,height=500,scrollbars=yes,resizable=yes");
    codigo.document.body.innerText = `<img class='none' src="${imgPortada.value}"/>
            <div class='altpost__info'>
            <div class='info__title flex'>
                <h4><i class="fa fa-picture-o" aria-hidden="true"></i> Capturas</h4>
            </div>
            <div class='info__content flex wrap align-items-start info__content--images'>
            ${imgHTML}
            </div>
            </div><!-- .altpost__info -->

            <div class='altpost__info'>
            <div class='info__title flex'>
                <h4><i class="fa fa-youtube-play" aria-hidden="true"></i> Trailer</h4>
            </div>
            <div class='info__content'>
                <div class="embed"><iframe src="https://www.youtube.com/embed/${idyoutube.value}" allowfullscreen=""></iframe></div>
            </div>
            </div><!-- .altpost__info -->


            <div class='altpost__info wjs-tab'>
            <div class='info__title flex'>
                <a href="#panel1" class="wjs-item is-active">Descargar</a><!-- BOTON DEL PRIMER PANEL -->
                <a href="#panel2" class="wjs-item">Ver online</a><!-- BOTON DEL SEGUNDO PANEL -->
            </div>
            <div class='info__content post-body'>

                <!-- PRIMER PANEL -->
                <div id="panel1" class="wjs-panel is-active">
                    <div class="table"><table>
                        <thead><tr><th>Lista de Opciones</th><th>Servidor</th><th>Traducción</th></tr></thead>
                        <tbody>
                        ${urlHTML}
                        </tbody>
                    </table></div>
                </div>
                <!-- SEGUNDO PANEL -->
                <div id="panel2" class="wjs-panel">
                ${onlineMostrar}
            </div>
            </div>
            </div><!-- .altpost__info -->


`;


});