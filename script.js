//Función principal de capturar ejecuta el constructor de objetos
function capturar (){
   
    //Constructor de objetos 
    class Producto{ 
        constructor (nombre, precio, departamento){
            this.nombre = nombre;
            this.precio = precio;
            this.departamento = departamento;
        }
    }
    
    //Variables a cuales las asignamos con el document.getElementById mediante id ingresando a través de los input del html
    let nombreCapturar = document.getElementById("nombre").value;
    let precioCapturar = document.getElementById("precio").value;
    let departamentoCapturar = document.getElementById("departamento").value;
   
    //se crea un nuevo objeto en este caso producto, esta es una constante pero no la establecemos como "const"  porque necesitamos que sea del tipo global y así la utilizamos por fuera del constructor
    nuevoProducto = new Producto ( nombreCapturar, precioCapturar, departamentoCapturar );
   
    //al ejecutar la función capturar ejecutamos agregar así enviamos el nuevo objeto en este caso producto a la base de datos establecida mediante un array 
    agregar()
}

//base de datos "Array"
let baseDatos = [];
//función agregar se ejecuta en conjunto con el array almacenando los objetos en este caso la tabla
function  agregar() {
    baseDatos.push(nuevoProducto);
    document.getElementById("tabla").innerHTML += "<tbody><td>"+nuevoProducto.nombre+"</td><td>"+nuevoProducto.precio+"</td><td>" +nuevoProducto.departamento+"</td></tbody>"
} 


 
