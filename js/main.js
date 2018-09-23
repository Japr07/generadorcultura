const generarHTML = document.getElementById("generarHTML");
let imagenes = 1;
let imgForm = "";
let imgHTML = "";
let urlForm = "";
let urlHTML = "";
let urls = 1;

$("#imgBtn").click(function (e) {
    e.preventDefault();
    imgForm = "";
    imagenes++;
    for (let i = 1; i < imagenes; i++) {
        imgForm += `
    <div class="input-group mt-2">
        <div class="input-group-prepend">
            <span class="input-group-text">Imagen ${[i+1]}:</span>
        </div>
        <input type="text" id="imagenes${[i]}" class="form-control">
        <div class="input-group-append">
            <input type="button" value="Eliminar" class="btn btn-danger borrarImg">
        </div>
    </div>
    `
    };
    $("#imgExtra").html(imgForm);
});

$("#urlBtn").click(function (e) {
    e.preventDefault();
    urlForm = "";
    urls++;
    for (let i = 1; i < urls; i++) {
        urlForm += `
    <div class="input-group mt-2">
        <input type="text" placeholder="Nombre URL" id="urlNombre${[i]}" class="form-control">
        <input type="text" placeholder="Insertar URL" id="urlDescarga${[i]}" class="form-control">
        <input type="text" placeholder="Icono" id="urlIcono${[i]}" class="form-control">
        <div class="input-group-append">
            <input type="button" value="Eliminar" class="btn btn-danger borrarUrl">
        </div>
    </div>
    `
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
        urlForm += `
    <div class="input-group mt-2">
        <input type="text" placeholder="Nombre URL" id="urlNombre${[i]}" class="form-control">
        <input type="text" placeholder="Insertar URL" id="urlDescarga${[i]}" class="form-control">
        <input type="text" placeholder="Icono" id="urlIcono${[i]}" class="form-control">
        <div class="input-group-append">
            <input type="button" value="Eliminar" class="btn btn-danger borrarUrl">
        </div>
    </div>
    `
    }
    $("#urlExtra").html(urlForm);
})

const borrarImg = $(".borrarInputImg");

$(borrarImg).on("click", ".borrarImg", function (e) {
    e.preventDefault();
    $(this).parent().parent().remove();
    imgForm = "";
    imagenes--;
    for (let i = 1; i < imagenes; i++) {
        imgForm += `
    <div class="input-group mt-2">
        <div class="input-group-prepend">
            <span class="input-group-text">Imagen ${[i+1]}:</span>
        </div>
        <input type="text" id="imagenes${[i]}" class="form-control">
        <div class="input-group-append">
            <input type="button" value="Eliminar" class="btn btn-danger borrarImg">
        </div>
    </div>
    `
    }
    $("#imgExtra").html(imgForm);
})

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
    let $imagenes = new Array();
    let $urlDescarga = new Array();
    let $urlNombre = new Array();
    let $urlIcono = new Array();

    urlHTML = "";

    for (let i = 0; i < urls; i++) {
        $urlDescarga.push(document.getElementById(`urlDescarga${[i]}`));
        $urlNombre.push(document.getElementById(`urlNombre${[i]}`));
        $urlIcono.push(document.getElementById(`urlIcono${[i]}`));
        urlHTML += `
        <a class="btn bg-blue-violet" href="${$urlDescarga[i].value}">${$urlIcono[i].value} ${$urlNombre[i].value}</a>        
        `;
    }

    imgHTML = "";

    for (let i = 0; i < imagenes; i++) {
        $imagenes.push(document.getElementById(`imagenes${[i]}`));
        imgHTML += `
        <img src="${$imagenes[i].value}">
        `;
    }

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
    codigo.document.body.innerText = `
    <div align=center>
        <div class="altpost__info">
            <div class="info__content">
                <img src="${imagenPortada.value}" alt="${nombreEntrada.value}" title="${nombreEntrada.value}"/>
            </div>
        </div>
        <div class="altpost__info">
            <div class="info__content">
                <a>${textoEntrada.value}</a>
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
                Tamaño: ${peso.value}MB Aprox<br/>
                Duración: ${duracion.value} min<br/>
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
    </center>
    `;
});