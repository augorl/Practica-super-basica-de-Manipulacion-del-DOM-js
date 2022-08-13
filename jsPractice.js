// some practice about basics js stuff

//Creacion de variables
let Nombre = 'Augusto';
let Apellido = 'Rojas';
let NombreDeUsuario = '@augurojas';
let Edad = 24;
let CorreoElectrónico = 'augurojas@gmail.com';
let MayorDeEdad = true;
let DineroAhorrado = 3000;
let Deudas = 0;

function User(name, lastName, savings, debt) {
    let fullName = name + ' ' + lastName;
    let netWorth = savings - debt;
    console.log( 'Hola, soy ' + fullName + '. Mis ahorros don de ' + netWorth + '.' );
    
}

User('Augusto', 'Rojas', 3000, 100);

//Objetos

const Usuario = {
    nombre: 'Augusto',
    apellido: 'ROjas',
    nombreDeUsuario: 'augurojas',
    edad: 24,
    correoElectronico: 'augurojas@gmail.com',
    mayorDeEdad: true,
}

function userObject(user) {
    console.log( 'Hola, soy ' + user.nombre + '.' + ' Puedes seguirme con mi usuario ' + user.nombreDeUsuario + 
    ' o escribirme a mi correo ' + user.correoElectronico);

}

userObject(Usuario);

//Objetos en Array

const objetosEnArrays = [
    {
        nombre: 'Augusto',
        apellido: 'ROjas',
        nombreDeUsuario: 'augurojas',
        edad: 24,
        correoElectronico: 'augurojas@gmail.com',
        mayorDeEdad: true,
    },
    {
        nombre: 'Andres',
        apellido: 'Rojas',
        nombreDeUsuario: 'andresrojas',
        edad: 29,
        correoElectronico: 'androjas@gmail.com',
        mayorDeEdad: true,
    },    
    
]
function userObjectArrays(user) {
    console.log( 'Hola, soy ' + user.nombre + '.' + ' Puedes seguirme con mi usuario ' + user.nombreDeUsuario + 
    ' o escribirme a mi correo ' + user.correoElectronico);

}

userObjectArrays(objetosEnArrays[1]);


//Practica de condicionales

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
} // voy a convertir esta sentencia a if

function tipoDeSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
    } else if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } else if (suscripcion == 'ExpertPlus') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    } else if (suscripcion == 'Basic') {
        console.log("Solo puedes tomar los cursos gratis");
    }
}

tipoDeSuscripcion('Expert');

const tiposDeSuscripciones = {
    Free:'Solo puedes tomar los cursos gratis',
    Basic: 'Solo puedes tomar los cursos gratis',
    Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    ExpertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
}

function tipoDeSuscripcionObjeto(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
    }
}

tipoDeSuscripcionObjeto('Free');

// Ciclos


//while
let numeros = 0;
let iteracion = 1;

while (numeros <= 10) {
    console.log('Esta es la iteracion # ' + iteracion);
    numeros++;
    iteracion++;
};

//for
let iteracion = 1;
for (let i = 0; i < 10; i++) {
    
    console.log('Esta es la iteracion # ' + iteracion);
    iteracion++;
};

//validacion de datos por el usuario

let respuesta;
while (respuesta != '4') {
    let pregunta = prompt('Cual es la suma de 2+2');
    respuesta = pregunta;

}
