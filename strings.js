let nombre = "Eva";
let apellido = "Filgueira";

let estudiante = `${nombre} ${apellido}`;
//let estudiante2= nombre.concat(" ").concat(apellido);

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let numLetras = estudiante.length;

let inicialNombre = nombre[0];
let finalApellido = apellido[apellido.length - 1];

let noEspacios = estudiante.replace(/ /g, "");
//let noEspacios2 = estudiante.replace(" ", "");

let incluyeNombre = estudiante.includes(nombre);