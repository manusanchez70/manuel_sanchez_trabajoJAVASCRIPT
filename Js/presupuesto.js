//SELECCIONAMOS #FORMULARIO Y #ENVIAR//
const miform = document.querySelector('#formulario');
const miBoton = document.querySelector('#enviar');

miform.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    let valido = validarForm();

    if(valido == true){
        miform.submit();
    }
    
});
function validarForm(){
      // DECLARAMOS LAS CONSTANTES QUE VAMOS A UTILIZAR
    const nombre = document.getElementById("nombre");
    const apellidos  = document.getElementById("apellidos");
    const telefono = document.getElementById("telefono");
    const edad = document.getElementById("edad");
    const correo = document.getElementById("correo");
    const privacidad = document.getElementById("privacidad");

//REALIZAMOS COMPROBACIONES

let correcto = true;



//NOMBRE

if(nombre.value == null || nombre.value == ""){
    setErrorFor(nombre,'El campo nombre no puede estar vacio');
    correcto = false;
}else{
    let name_re = /^[a-zA-Z ]{2,30}$/;
    if(!name_re.exec(nombre.value)){
        setErrorFor(nombre,'El nombre sólo puede estar formado por letras y contener entre 2 y 30 caracteres');
        correcto = false;
    }else{
        setSuccessFor(nombre);
    }
}



//APELLIDOS
if(apellidos.value == null || apellidos.value == ""){
    setErrorFor(apellidos,'El campo apellidos no puede estar vacio');
    correcto = false;
}else{
    let apellidos_re = /^[a-zA-Z0-9 ]{2,40}$/;
    if(!apellidos_re.exec(apellidos.value)){
        setErrorFor(apellidos,'El campo apellidos debe contener letras y numeros');
        correcto = false;
    }else{
        setSuccessFor(apellidos);
    }
}



//TELEFONO
if(telefono.value == null || telefono.value == ""){
    setErrorFor(telefono,'El campo telefono no puede estar vacio');
    correcto = false;
}else{
    let telefono_re = /^[0-9]{9}$/;
    if(!telefono_re.exec(telefono.value)){
        setErrorFor(telefono,'El campo telefono solo puede tener numeros');
        correcto = false;
    }else{
        setSuccessFor(telefono);
    }
}



//EDAD
if(edad.value == null || edad.value == ""){
    setErrorFor(edad,'El campo edad no puede estar vacio');
    correcto = false;
}else{
    let edad_re = /^[0-9]{1,2}$/;
    if(!edad_re.exec(edad.value)){
        setErrorFor(edad,'El campo edad solo puede tener numeros');
        correcto = false;
    }else{
        setSuccessFor(edad);
    }
}



//CORREO
if(correo.value == null || correo.value == ""){
    setErrorFor(correo,'El campo correo no puede estar vacio');
    correcto = false;
}else{
    let correo_re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!correo_re.exec(correo.value)){
        setErrorFor(correo,'El campo correo no es válido');
        correcto = false;
    }else{
        setSuccessFor(correo);
    }
}




// PRIVACIDAD
if(!privacidad.checked){
    setErrorFor(privacidad,'Tienes que aceptar las condiciones');
    correcto = false;
}else{
    setSuccessFor(privacidad);
}
//PRESUPUESTO

const resultado = document.getElementById("resultado");
if (resultado.value.trim() === "") {
   setErrorFor(resultado,'El campo presupuesto no puede estar vacio');
    correcto = false;
}




//SI TODO ESTA CORRECTO SE ENVIA EL FORMULARIO
if(correcto==true){
    return true;

}else{
    return false;
}
}



//MENSAJES DE ERROR

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    if (small) {
        small.innerText = message;
    }
}

//SI TODO CORRECTO
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


//PRESUPUESTO
const calcularBoton = document.querySelector('#calcular');
const precios = {
    psicologica:50,
    online:40,
    mayores:35

};
calcularBoton.addEventListener('click', (e) => {
    e.preventDefault();
    const tipoTerapia = document.getElementById('tipo-terapia').value;
    const sesiones = parseInt(document.getElementById('sesiones').value);

    if (!tipoTerapia || isNaN(sesiones) || sesiones <= 0) {
        alert('Seleciona el tipo de terapia y escribe una cantidad de sesiones valida');
        return;
    }
    const total = precios[tipoTerapia] * sesiones;
    document.getElementById('resultado').value = total.toFixed(2);
});
 






