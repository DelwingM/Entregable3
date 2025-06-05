const form = document.querySelector(".contact-form");
const name = document.getElementById('name');
const reason = document.getElementById('reason');
const email = document.getElementById('email');

form.addEventListener("submit", (event) => {
    let valida;
    event.preventDefault();

    // validamos nombre
    valida = name.value.length === 0
    if (valida){
        alert("Debe digitar el Nombre");
        name.className="invalid";
        name.focus();
        return;
    } else {
        valida=true;
        name.className="form-input";
    }


    // validamos email
    valida = email.value.length === 0
        || email.value.indexOf("@") === -1
        || email.value.indexOf(".") === -1
        || email.value.indexOf("@") === 0
        || email.value.indexOf(".") === 0
        || email.value.indexOf("@",1) === -1;
    if(valida){
            alert("El correo debe tener el símbolo @ y . por lo menos una vez o no estar vacío");
            email.className = "invalid";
            email.focus();
            return;
        } else {
            valida = true;
            email.className ="form-input";
        }


    // validamos motivo
    valida = reason.value.length === 0
    if (valida){
        alert("Debe Digitar el Motivo del contacto");
        reason.className="invalid";
        reason.focus();
        return;
    } else {
        valida = true;
        reason.className="form-input";
    }

    if (valida){
        console.log("Nombre:", name.value);
        console.log("Descripción:", reason.value);
        console.log("Correo:", email.value);

        alert("Hola " + name.value + ", su correo es " + email.value + " y su motivo de contacto es: \n" + reason.value);
    }
});


form.addEventListener("reset", (event) => {
    name.className="form-input";
    email.className="form-input";
    reason.className="form-input";
});




