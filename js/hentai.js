$(document).ready(function () {
    $('#generos').dropdown();
    $('#censura').dropdown();
    $('#audio').dropdown();
    $('#subtitulo').dropdown();
    $('#formato').dropdown();
});



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
let urldb = "";

$("#urlBtn").click(function (e) {
    e.preventDefault();

    urlForm = "";

    let nombreSave = new Array();
    let urlSave = new Array();
    let correoSave = new Array();
    let servidorSave = new Array();

    let posicionNombre;
    let posicionUrl;
    let posicionCorreo;
    let posicionServidor;

    for (let i = 1; i <= urlCount; i++) {
        posicionNombre = document.getElementById(`urlNombre${[i]}`).value;
        posicionUrl = document.getElementById(`urlDescarga${[i]}`).value;
        posicionCorreo = document.getElementById(`urlCorreo${[i]}`).value;
        posicionServidor = document.getElementById(`urlServidor${[i]}`).value;

        nombreSave.push(posicionNombre);
        urlSave.push(posicionUrl);
        correoSave.push(posicionCorreo);
        servidorSave.push(posicionServidor);
    }

    urlCount++;
    urls++;

    for (let i = 1; i < urls; i++) {
        urlForm += `<div class="input-group mb-2">
            <input type="text" placeholder="Nombre URL" id="urlNombre${i}" class="form-control">
            <input type="text" placeholder="Descarga URL" id="urlDescarga${i}" class="form-control">
            <input type="text" placeholder="Correo URL" id="urlCorreo${i}" class="form-control">
            <input type="text" placeholder="Servidor URL" id="urlServidor${i}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarUrl">                                
            </div>
        </div>`
    };

    $("#urlExtra").html(urlForm);

    for (let i = 1; i < urlCount; i++) {
        document.getElementById(`urlNombre${[i]}`).value = nombreSave[i - 1];
        document.getElementById(`urlDescarga${[i]}`).value = urlSave[i - 1];
        document.getElementById(`urlCorreo${[i]}`).value = correoSave[i - 1];
        document.getElementById(`urlServidor${[i]}`).value = servidorSave[i - 1];
    }
});

const borrarUrl = $(".borrarInputUrl");

$(borrarUrl).on("click", ".borrarUrl", function (e) {
    e.preventDefault();

    urlForm = "";
    urls--;

    let nombreSave = new Array();
    let urlSave = new Array();
    let correoSave = new Array();
    let servidorSave = new Array();

    let posicionNombre;
    let posicionUrl;
    let posicionCorreo;
    let posicionServidor;

    for (let i = 1; i <= urlCount; i++) {
        posicionNombre = document.getElementById(`urlNombre${[i]}`).value;
        posicionUrl = document.getElementById(`urlDescarga${[i]}`).value;
        posicionCorreo = document.getElementById(`urlCorreo${[i]}`).value;
        posicionServidor = document.getElementById(`urlServidor${[i]}`).value;

        nombreSave.push(posicionNombre);
        urlSave.push(posicionUrl);
        correoSave.push(posicionCorreo);
        servidorSave.push(posicionServidor);
    }

    nombreSave.splice(nombreSave.indexOf($(this).parent().prev().prev().prev().prev().val()), 1)
    urlSave.splice(urlSave.indexOf($(this).parent().prev().prev().prev().val()), 1)
    correoSave.splice(correoSave.indexOf($(this).parent().prev().prev().val()), 1)
    servidorSave.splice(servidorSave.indexOf($(this).parent().prev().val()), 1)

    urlCount--;

    $(this).parent().parent().remove();

    for (let i = 1; i < urls; i++) {
        urlForm += `<div class="input-group mb-2">
            <input type="text" placeholder="Nombre URL" id="urlNombre${i}" class="form-control">
            <input type="text" placeholder="Descarga URL" id="urlDescarga${i}" class="form-control">
            <input type="text" placeholder="Correo URL" id="urlCorreo${i}" class="form-control">
            <input type="text" placeholder="Servidor URL" id="urlServidor${i}" class="form-control">
            <div class="input-group-append">
                <input type="button" value="Eliminar" class="btn btn-danger borrarUrl">                                
            </div>
        </div>`
    }

    $("#urlExtra").html(urlForm);

    for (let i = 0; i < urlCount; i++) {
        document.getElementById(`urlNombre${[i+1]}`).value = nombreSave[i];
        document.getElementById(`urlDescarga${[i+1]}`).value = urlSave[i];
        document.getElementById(`urlCorreo${[i+1]}`).value = correoSave[i];
        document.getElementById(`urlServidor${[i+1]}`).value = servidorSave[i];
    }

});

function mostrarUrlHTML() {
    let $urlDescarga = new Array();
    let $urlNombre = new Array();
    let $urlCorreo = new Array();
    let $urlServidor = new Array();    
    let encryp;

    urlHTML = "";

    for (let i = 0; i < urls; i++) {
        $urlDescarga.push(document.getElementById(`urlDescarga${[i]}`));
        $urlNombre.push(document.getElementById(`urlNombre${[i]}`));
        $urlCorreo.push(document.getElementById(`urlCorreo${[i]}`));
        $urlServidor.push(document.getElementById(`urlServidor${[i]}`));
        urlHTML += `<a class="btn bg-blue-violet" href="${$urlDescarga[i].value}" target="_blank"><i class="fas fa-download"></i> ${$urlNombre[i].value}</a>`;
        /*//////////////
        ////Datos DB////
        //////////////*/
        encryp = nombreEntrada.value;
        for (let j = 0; j < nombreEntrada.value.length; j++) {
            encryp = encryp.replace('o', '0');
            encryp = encryp.replace('O', '0');
            encryp = encryp.replace('i', '1');
            encryp = encryp.replace('I', '1');
            encryp = encryp.replace('a', '4');
            encryp = encryp.replace('A', '4');
            encryp = encryp.replace('e', '3');
            encryp = encryp.replace('E', '3');
        }
        
        $.post("http://generadorcultura.rf.gd/server/dbpost.php", {
            "nombre": nombreEntrada.value,
            "encryp": encryp,
            "correo": $urlCorreo[i].value,
            "enlace": $urlDescarga[i].value,
            "servidor": $urlServidor[i].value
        });
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
let precuelas = 0;
let preForm = "";
let preHTML = "";

$("#preBtn").click(function (e) {
    e.preventDefault();

    preSec = true;
    preForm = "";

    let preSaveNombre = new Array();
    let preSaveDireccion = new Array();

    let posicionNombre;
    let posicionDireccion;

    for (let i = 0; i < preCount; i++) {
        posicionNombre = document.getElementById(`preNombre${[i]}`).value;
        posicionDireccion = document.getElementById(`preDescarga${[i]}`).value;
        preSaveNombre.push(posicionNombre);
        preSaveDireccion.push(posicionDireccion);
    }

    preCount++;
    precuelas++

    for (let i = 0; i < precuelas; i++) {
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

    for (let i = 1; i < preCount; i++) {
        document.getElementById(`preNombre${[i-1]}`).value = preSaveNombre[i - 1];
        document.getElementById(`preDescarga${[i-1]}`).value = preSaveDireccion[i - 1];
    }
});

const borrarPre = $(".borrarInputPre");

$(borrarPre).on("click", ".borrarPre", function (e) {
    e.preventDefault();

    preForm = "";
    precuelas--;

    let nombreSave = new Array();
    let direccionSave = new Array();

    let posicionNombre;
    let posicionDireccion;

    for (let i = 0; i < preCount; i++) {
        posicionNombre = document.getElementById(`preNombre${[i]}`).value;
        nombreSave.push(posicionNombre);
        posicionDireccion = document.getElementById(`preDescarga${[i]}`).value;
        direccionSave.push(posicionDireccion);
    }

    nombreSave.splice(nombreSave.indexOf($(this).parent().prev().prev().val()), 1);
    direccionSave.splice(direccionSave.indexOf($(this).parent().prev().val()), 1);
    preCount--;

    $(this).parent().parent().remove();

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

    for (let i = 0; i < preCount; i++) {
        document.getElementById(`preNombre${[i]}`).value = nombreSave[i];
        document.getElementById(`preDescarga${[i]}`).value = direccionSave[i];
    }
})

/*//////////////
////Secuelas////
//////////////*/


let secCount = 0;
let secuelas = 0;
let secForm = "";
let secHTML = "";


$("#secBtn").click(function (e) {
    e.preventDefault();

    preSec = true;
    secForm = "";

    let secSaveNombre = new Array();
    let secSaveDireccion = new Array();

    let posicionNombre;
    let posicionDireccion;

    for (let i = 0; i < secCount; i++) {
        posicionNombre = document.getElementById(`secNombre${[i]}`).value;
        posicionDireccion = document.getElementById(`secDescarga${[i]}`).value;
        secSaveNombre.push(posicionNombre);
        secSaveDireccion.push(posicionDireccion);
    }

    secCount++;
    secuelas++;

    for (let i = 0; i < secuelas; i++) {
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

    for (let i = 1; i < secCount; i++) {
        document.getElementById(`secNombre${[i-1]}`).value = secSaveNombre[i - 1];
        document.getElementById(`secDescarga${[i-1]}`).value = secSaveDireccion[i - 1];
    }
});

const borrarSec = $(".borrarInputSec");

$(borrarSec).on("click", ".borrarSec", function (e) {
    e.preventDefault();

    secForm = "";
    secuelas--;

    let nombreSave = new Array();
    let direccionSave = new Array();

    let posicionNombre;
    let posicionDireccion;

    for (let i = 0; i < secCount; i++) {
        posicionNombre = document.getElementById(`secNombre${[i]}`).value;
        nombreSave.push(posicionNombre);
        posicionDireccion = document.getElementById(`secDescarga${[i]}`).value;
        direccionSave.push(posicionDireccion);
    }

    nombreSave.splice(nombreSave.indexOf($(this).parent().prev().prev().val()), 1);
    direccionSave.splice(direccionSave.indexOf($(this).parent().prev().val()), 1);

    secCount--;

    $(this).parent().parent().remove();

    for (let i = 0; i < secuelas; i++) {
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

    if (preCount == 0 && secuelas == 0) {
        preSec = false;
    }

    $("#sec").html(secForm);

    for (let i = 0; i < secCount; i++) {
        document.getElementById(`secNombre${[i]}`).value = nombreSave[i];
        document.getElementById(`secDescarga${[i]}`).value = direccionSave[i];
    }
})

/*//////////////
//Generar HTML//
//////////////*/
const generarHTML = document.getElementById("generarHTML");

generarHTML.addEventListener("click", function () {
    const nombreEntrada = document.getElementById("nombreEntrada");
    const imagenPortada = document.getElementById("imagenPortada");
    const textoEntrada = document.getElementById("textoEntrada");
    const año = document.getElementById("año");
    const capitulos = document.getElementById("capitulos");
    const peso = document.getElementById("peso");
    const duracion = document.getElementById("duracion");
    const calidad = document.getElementById("calidad");
    const generos = $('#generos').dropdown('get value');
    const censura = $('#censura').dropdown('get value');
    const audio = $('#audio').dropdown('get value');
    const subtitulo = $('#subtitulo').dropdown('get value');
    const formato = $('#formato').dropdown('get value');

    mostrarPreSecHtml();
    mostrarUrlHTML();
    mostrarImgHTML();

    let codigo = window.open("", "codigo", "width=600,height=500,scrollbars=yes,resizable=yes");
    codigo.document.body.innerText = `<div align=center>
        <div class="altpost__info">
            <div class="info__content">
                <img src="${imagenPortada.value}" alt="Descargar ${nombreEntrada.value}" title="Descargar ${nombreEntrada.value}"/>
            </div>
        </div>
        <div class="altpost__info">
            <div class="info__content">
                <p>${textoEntrada.value}</p>
                ${mostrarPreSec}
            </div>
        </div>
    </div>

    <div class="altpost__info">
        <div class="info__title flex">
            <h4><i class="fas fa-info-circle"></i>Informacion</h4>
        </div>
        <div align=center>
            <div class="info__content">
                <b>Titulo:</b> ${nombreEntrada.value}<br/>
                <b>Generos:</b>${generos}<br/>
                <b>Año:</b> ${año.value}<br/>
                <b>Capitulos:</b> ${capitulos.value}<br/>
                <b>Censura:</b> ${censura}<br/>
                <b>Audio:</b> ${audio}<br/>
                <b>Subtítulos:</b> ${subtitulo}<br/>
                <b>Formato:</b> ${formato}<br/>
                <b>Tamaño:</b> ${peso.value}<br/>
                <b>Duración:</b> ${duracion.value}<br/>
                <b>Calidad:</b> ${calidad.value}<br/>
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
            <h4><i class="fas fa-download"></i> Descargas</h4>
        </div>
    <center>
        <div class="info__content flex wrap align-items-start">
            ${urlHTML}
        </div>
    </div>
    </center>`;
});