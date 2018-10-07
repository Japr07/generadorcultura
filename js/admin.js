//llamando ajax
let ajax = new XMLHttpRequest();
let method = "GET";
let url = "http://generadorcultura.rf.gd/server/dbget.php"
let async = true;

//respuesta
ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let resultado = JSON.parse(this.responseText);
        for (let i = 0; i < resultado.length; i++) {
            document.getElementById("resultado").innerHTML += `
        <tr>
            <th scope="row">${resultado[i].id}</th>
            <td>${resultado[i].nombre}</td>
            <td>${resultado[i].nombre_encryp}</td>
            <td>${resultado[i].enlace}</td>
            <td>${resultado[i].correo}</td>
            <td>${resultado[i].servidor}</td>
            <td>${resultado[i].fecha}</td>
            <td><button type="submit" class="btn btn-sm btn-success">Editar</button><button type="submit" class="btn btn-sm btn-danger">Borrar</button></td>
        </tr>
        `
        }
    }
};
ajax.open(method, url, async);

//enviado datos ajax
ajax.send();
