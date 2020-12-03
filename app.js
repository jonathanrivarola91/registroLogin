let registroLogin = require('./usuarios');

let process = require('process');
let comando = process.argv[2];

switch (comando) {
    case 'listar':
        let usuarios = registroLogin.leerJSON();
        console.log('--------------------------------'); 
        console.log("Lista de Usuarios");
        console.log('--------------------------------'); 
        usuarios.forEach(usuario => {
            console.log('NOMBRE: ' + usuario.nombre + ' MAIL: ' + usuario.mail + ' PASSWORD: ' + usuario.password);
        })
        break;
    case 'registro':
        let usuarioAgregar = process.argv[3];
        let mailAgregar = process.argv[4];
        let passwordAgregar = process.argv[5];

        registroLogin.registro(usuarioAgregar,mailAgregar,passwordAgregar);
        

        break;
    case 'login':
        let mail = process.argv[3];
        let password = process.argv[4];
        registroLogin.login(mail,password);
        break;     
    case 'eliminar':
        let usuarioEliminar = process.argv[3];
        let mailEliminar = process.argv[4];
        let passwordEliminar = process.argv[5];
    
        registroLogin.eliminar(usuarioEliminar,mailEliminar,passwordEliminar);
    
        console.log('--------------------------------');            
        console.log('Usuario eliminado correctamente');
        console.log('--------------------------------');
        break;
    default:
        console.log('ingrese algun comando');
        break;         
}

