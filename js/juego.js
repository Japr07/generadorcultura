$(document).ready(function () {
    $('#generos').dropdown();
    $('#censura').dropdown();
    $('#audio').dropdown();
    $('#idioma').dropdown();
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
        imgForm += `<div class="input-group mb-2">
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
        imgForm += `<div class="input-group mb-2">
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
        imgHTML += `<img src="${$imagenes[i].value}">
        `;
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

const generarHTML = document.getElementById("generarHTML");

generarHTML.addEventListener("click", function () {
    const nombreEntrada = document.getElementById("nombreEntrada");
    const imagenPortada = document.getElementById("imagenPortada");
    const textoEntrada = document.getElementById("textoEntrada");
    const peso = document.getElementById("peso");
    const nombreAlt = document.getElementById("nombreAlt");
    const circulo = document.getElementById("circulo");
    const ApoyoCirculo = document.getElementById("ApoyoCirculo");

    const generos = $('#generos').dropdown('get value');
    const censura = $('#censura').dropdown('get value');
    const audio = $('#audio').dropdown('get value');
    const idioma = $('#idioma').dropdown('get value');

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
            </div>
        </div>
    </div>

    <div class="altpost__info">
        <div class="info__title flex">
            <h4><i class="fas fa-info-circle"></i>Informacion</h4>
        </div>
        <div align=center>
            <div class="info__content">
                <b>Nombre:</b> ${nombreEntrada.value}<br/>
                <b>Alternativo:</b> ${nombreAlt.value}<br/>
                <b>Artista o Circulo:</b> ${circulo.value}<br/>
                <b>Generos:</b> ${generos}<br/>
                <b>Voces:</b> ${audio}<br/>
                <b>Idioma:</b> ${idioma}<br/>
                <b>Censura:</b> ${censura}<br/>
                <b>Tamaño:</b> ${peso.value}<br/>
                <br/>
                (Si Pueden y tienen la oportunidad para comprar y apoyar los trabajos de este circulo lo pueden hacer por <a href="${ApoyoCirculo.value}" target="_blank">aquí</a>
            </div>
        </div>
    </div>

    <div class="altpost__info">
        <div class="info__title flex">
            <h4><i class="fas fa-exclamation-triangle"></i>¡Importante!</h4>
        </div>
        <div align=center>
            <div class="info__content">
                Los juegos en Japones requieren de una configuración en el windows... Asi que si tienes problemas para visualizar los caracteres japoneses lee este <a href="https://www.culturahentai.com/2018/10/configuracion-regional-del-sistema.html" target="_blank">Post</a>
            </div>
        </div>
    </div>
    <div class="info__title flex">
        <h4><i class="fas fa-images"></i> Capturas</h4>
    </div>
    <div class="info__content flex wrap align-items-start info__content--images">
        <center>
            ${imgHTML}
        </center>
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