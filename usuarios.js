let fs = require('fs');

let registroLogin = {
    archivo : './usuarios.json',
    leerJSON: function(){
        let listaDeUsuariosJSON = fs.readFileSync(this.archivo, 'utf-8');
        let listaUsuarios = JSON.parse(listaDeUsuariosJSON);

        return listaUsuarios;

    },
    guardarJSON: function(info) {
        let usuariosActualizados = JSON.stringify(info);
        fs.writeFileSync(this.archivo, usuariosActualizados, 'utf-8');
    },
    registro : function(usuarioAgregar,mailAgregar,passwordAgregar) {
        let listaUsuarios = this.leerJSON();
        let existe = false;
        listaUsuarios.forEach(usuario =>{
            if(usuario.mail == mailAgregar){
                existe = true;
            }    
        })
            if(existe){
                console.log('el mail ya existe');
            }else{
                let nuevoUsuario = {
                nombre : usuarioAgregar,
                mail : mailAgregar,
                password : passwordAgregar
                }
            listaUsuarios.push(nuevoUsuario);

            this.guardarJSON(listaUsuarios);
            return console.log('usuario agregado');
            }
    },
    login : function(mail,password){
        let listaUsuarios = this.leerJSON();
        let mensaje;
        listaUsuarios.forEach(usuario => {
            if(usuario.mail == mail && usuario.password == password){
                mensaje = 'Sesion iniciada, bienvenido ' + usuario.nombre;
            }else{
                mensaje = 'no se encontro el usuario';
            }
        });
        return console.log(mensaje);

    },
    eliminar : function(nombre, mail, password){
        let listaUsuarios = this.leerJSON();
        let listaActualizada;
        let msg;
        listaUsuarios.forEach(usuario => {
        if(usuario.nombre == nombre && usuario.mail == mail && usuario.password == password){        
            listaActualizada = listaUsuarios.filter(usu =>{
                return usu != usuario
            })
        this.guardarJSON(listaActualizada);
        }else{
        msg = 'datos incorrectos';
        }       
    });
    },

}

module.exports = registroLogin;
