const generarHTML = document.getElementById("generarHTML");


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
        <img src="${$imagenes[i].value}">
        `;
    }
};

/*//////////////
///////URL//////
//////////////*/

let urls = 1;
let urlForm = "";
let urlHTML = "";

$("#urlBtn").click(function (e) {
    e.preventDefault();
    urlForm = "";
    urls++;
    for (let i = 1; i < urls; i++) {
        urlForm += `<div class="input-group mt-2">
            <input type="text" placeholder="Nombre URL" id="urlNombre${[i]}" class="form-control">
            <input type="text" placeholder="Insertar URL" id="urlDescarga${[i]}" class="form-control">
            <input type="text" placeholder="Icono" id="urlIcono${[i]}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarUrl">
            </div>
        </div>`
    };
    $("#urlExtra").html(urlForm);
});

const borrarUrl = $(".borrarInputUrl");

$(borrarUrl).on("click", ".borrarUrl", function (e) {
    e.preventDefault();
    $(this).parent().parent().remove();
    urlForm = "";
    urls--;
    for (let i = 1; i < urls; i++) {
        urlForm += `<div class="input-group mt-2">
            <input type="text" placeholder="Nombre URL" id="urlNombre${[i]}" class="form-control">
            <input type="text" placeholder="Insertar URL" id="urlDescarga${[i]}" class="form-control">
            <input type="text" placeholder="Icono" id="urlIcono${[i]}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarUrl">
            </div>
        </div>`
    }
    $("#urlExtra").html(urlForm);
});

function mostrarUrlHTML() {
    let $urlDescarga = new Array();
    let $urlNombre = new Array();
    let $urlIcono = new Array();

    urlHTML = "";

    for (let i = 0; i < urls; i++) {
        $urlDescarga.push(document.getElementById(`urlDescarga${[i]}`));
        $urlNombre.push(document.getElementById(`urlNombre${[i]}`));
        $urlIcono.push(document.getElementById(`urlIcono${[i]}`));
        urlHTML += `<a class="btn bg-blue-violet" href="${$urlDescarga[i].value}" target="_blank">${$urlIcono[i].value} ${$urlNombre[i].value}</a>`;
    }
};

/*//////////////
/////PreSec/////
//////////////*/

let preSec = false;
let mostrarPreSec = "";

function mostrarPreSecHtml() {

    if (preSec) {
        let $preNombre = new Array();
        let $preDireccion = new Array();
        let $secNombre = new Array();
        let $secDireccion = new Array();

        preHTML = "";
        secHTML = "";

        if (preCount > 0) {
            for (let i = 0; i < preCount; i++) {
                $preNombre.push(document.getElementById(`preNombre${[i]}`));
                $preDireccion.push(document.getElementById(`preDescarga${[i]}`));
                preHTML += `<span><b>Precuela</b></span><span><a href="${$preDireccion[i].value}">${$preNombre[i].value}</a></span>
                `;
            }
        }
        if (secCount > 0) {
            for (let i = 0; i < secCount; i++) {
                $secNombre.push(document.getElementById(`secNombre${[i]}`));
                $secDireccion.push(document.getElementById(`secDescarga${[i]}`));
                preHTML += `<span><b>Secuela</b></span><span><a href="${$secDireccion[i].value}">${$secNombre[i].value}</a></span>
                `;
            }
        }

        mostrarPreSec = `<div class="related-links">
            ${preHTML}
            ${secHTML}
        </div>`;
    } else {
        mostrarPreSec = "";
    }
};

/*//////////////
///Precuelas////
//////////////*/

let preCount = 0;
let preForm = "";
let preHTML = "";

$("#preBtn").click(function (e) {
    e.preventDefault();
    preSec = true;
    preForm = "";
    preCount++;
    for (let i = 0; i < preCount; i++) {
        preForm += `<div class="input-group mb-2">
            <div class="input-group-prepend">
                <span class="input-group-text">Precuela:</span>
            </div>
            <input type="text" placeholder="Nombre" id="preNombre${[i]}" class="form-control">
            <input type="text" placeholder="Direccion" id="preDescarga${[i]}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarPre">
            </div>
        </div>`
    }
    $("#pre").html(preForm);
});

const borrarPre = $(".borrarInputPre");

$(borrarPre).on("click", ".borrarPre", function (e) {
    e.preventDefault();
    $(this).parent().parent().remove();
    preForm = "";
    preCount--;
    for (let i = 0; i < preCount; i++) {
        preForm += `<div class="input-group mb-2">
            <div class="input-group-prepend">
                <span class="input-group-text">Precuela:</span>
            </div>
            <input type="text" placeholder="Nombre" id="preNombre${[i]}" class="form-control">
            <input type="text" placeholder="Direccion" id="preDescarga${[i]}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarPre">
            </div>
        </div>`
    }

    if (preCount == 0 && secCount == 0) {
        preSec = false;
    }

    $("#pre").html(preForm);
})

/*//////////////
////Secuelas////
//////////////*/


let secCount = 0;
let secForm = "";
let secHTML = "";


$("#secBtn").click(function (e) {
    e.preventDefault();
    preSec = true;
    secForm = "";
    secCount++;
    for (let i = 0; i < secCount; i++) {
        secForm += `<div class="input-group mb-2">
            <div class="input-group-prepend">
                <span class="input-group-text">Secuela:</span>
            </div>
            <input type="text" placeholder="Nombre" id="secNombre${[i]}" class="form-control">
            <input type="text" placeholder="Direccion" id="secDescarga${[i]}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarSec">
            </div>
        </div>`
    }
    $("#sec").html(secForm);
});

const borrarSec = $(".borrarInputSec");

$(borrarSec).on("click", ".borrarSec", function (e) {
    e.preventDefault();
    $(this).parent().parent().remove();
    secForm = "";
    secCount--;
    for (let i = 0; i < secCount; i++) {
        secForm += `<div class="input-group mb-2">
            <div class="input-group-prepend">
                <span class="input-group-text">Secuela:</span>
            </div>
            <input type="text" placeholder="Nombre" id="secNombre${[i]}" class="form-control">
            <input type="text" placeholder="Direccion" id="secDescarga${[i]}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarSec">
            </div>
        </div>`
    }

    if (preCount == 0 && secCount == 0) {
        preSec = false;
    }

    $("#sec").html(secForm);
})

/*//////////////
//Generar HTML//
//////////////*/

generarHTML.addEventListener("click", function () {
    const nombreEntrada = document.getElementById("nombreEntrada");
    const imagenPortada = document.getElementById("imagenPortada");
    const textoEntrada = document.getElementById("textoEntrada");
    const generos = document.getElementById("generos");
    const año = document.getElementById("año");
    const capitulos = document.getElementById("capitulos");
    const peso = document.getElementById("peso");
    const duracion = document.getElementById("duracion");
    const calidad = document.getElementById("calidad");

    let censura = document.getElementById("censura");
    let audio = document.getElementsByClassName("audio")
    let subtitulo = document.getElementsByClassName("subtitulo");
    let formato = document.getElementsByClassName("formato");

    mostrarPreSecHtml();
    mostrarUrlHTML();
    mostrarImgHTML();

    for (var i = 0; i < formato.length; i++) {
        if (formato[i].checked) {
            formato = formato[i].value
        }
    }

    for (var i = 0; i < subtitulo.length; i++) {
        if (subtitulo[i].checked) {
            subtitulo = subtitulo[i].value
        }
    }

    for (var i = 0; i < audio.length; i++) {
        if (audio[i].checked) {
            audio = audio[i].value
        }
    }

    if (censura.checked) {
        censura = "Si"
    } else {
        censura = "No"
    }

    let codigo = window.open("", "codigo", "width=600,height=500,scrollbars=yes,resizable=yes");
    codigo.document.body.innerText = `<div align=center>
        <div class="altpost__info">
            <div class="info__content">
                <img src="${imagenPortada.value}" alt="${nombreEntrada.value}" title="${nombreEntrada.value}"/>
            </div>
        </div>
        <div class="altpost__info">
            <div class="info__content">
                <a>${textoEntrada.value}</a>
                ${mostrarPreSec}
            </div>
        </div>
    </div>

    <div class="info__title flex">
        <h4><i class="fas fa-images"></i> Capturas</h4>
    </div>

    <div class="info__content flex wrap align-items-start info__content--images">
        ${imgHTML}
    </div>

    <div class="altpost__info">
        <div class="info__title flex">
            <h4><i class="fas fa-info-circle"></i>Informacion</h4>
        </div>
        <div align=center>
            <div class="info__content">
                Titulo: ${nombreEntrada.value}<br/>
                Genero: ${generos.value}<br/>
                Año: ${año.value}<br/>
                Capitulos: ${capitulos.value}<br/>
                Censura: ${censura}<br/>
                Audio: ${audio}<br/>
                Subtítulos: ${subtitulo}<br/>
                Formato: ${formato}<br/>
                Tamaño: ${peso.value}<br/>
                Duración: ${duracion.value}<br/>
                Calidad: ${calidad.value}<br/>
            </div>
        </div>
    </div>
    
    <div class="altpost__info">
        <div class="info__title flex">
            <h4><i class="fas fa-download"></i> Descargas</h4>
        </div>
    <center>
        <div class="info__content flex wrap align-items-start info__content--images">
            ${urlHTML}
        </div>
    </div>
    </center>`;
});