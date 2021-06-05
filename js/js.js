let username;
let password;
let loginPassword;
let loginUsername;
let succesLogin;

username = prompt("Crea un usuario")

if(username != ""){
    password = prompt("Crea una contraseña")
    if (password != ""){
        loginUsername = prompt("Ingresa tu usuario")
        if(loginUsername != ""){
            loginPassword = prompt("Ingresa tu contraseña")
            succesLogin = (username === loginUsername) && (password === loginPassword);
            if(loginPassword != "" && succesLogin){
                alert("Bienvenido")
            }
            else if(loginPassword == ""){
                loginPassword = prompt("Debes ingresar tu contraseña")
                succesLogin = (username === loginUsername) && (password === loginPassword);
                if(succesLogin){
                    alert("Bienvenido")
                }
                else{
                    alert("Tu usuario y/o contraseña son incorrectos")
                }
            }
            else{
                alert("Tu usuario y/o contraseña son incorrectos")
            }
        }
        else{
            loginUsername = prompt("Debes ingresar tu usuario")
            loginPassword = prompt("Ingresa tu contraseña")
            succesLogin = (username === loginUsername) && (password === loginPassword);
            if(loginPassword != "" && succesLogin){
                alert("Bienvenido")
            }
            else if(loginPassword == ""){
                loginPassword = prompt("Debes ingresar tu contraseña")
                succesLogin = (username === loginUsername) && (password === loginPassword);
                if(succesLogin){
                    alert("Bienvenido")
                }
                else{
                    alert("Tu usuario y/o contraseña son incorrectos")
                }
            }
            else{
                alert("Tu usuario y/o contraseña son incorrectos")
            }
        }
    }
    else{
        password = prompt("Debes crear una contraseña")
        loginUsername = prompt("Ingresa tu usuario")
        if(loginUsername != ""){
            loginPassword = prompt("Ingresa tu contraseña")
            succesLogin = (username === loginUsername) && (password === loginPassword);
            if(loginPassword != "" && succesLogin){
                alert("Bienvenido")
            }
            else if(loginPassword == ""){
                loginPassword = prompt("Debes ingresar tu contraseña")
                succesLogin = (username === loginUsername) && (password === loginPassword);
                if(succesLogin){
                    alert("Bienvenido")
                }
                else{
                    alert("Tu usuario y/o contraseña son incorrectos")
                }
            }
            else{
                alert("Tu usuario y/o contraseña son incorrectos")
            }
        }
        else{
            loginUsername = prompt("Debes ingresar tu usuario")
            loginPassword = prompt("Ingresa tu contraseña")
            succesLogin = (username === loginUsername) && (password === loginPassword);
            if(loginPassword != "" && succesLogin){
                alert("Bienvenido")
            }
            else if(loginPassword == ""){
                loginPassword = prompt("Debes ingresar tu contraseña")
                succesLogin = (username === loginUsername) && (password === loginPassword);
                if(succesLogin){
                    alert("Bienvenido")
                }
                else{
                    alert("Tu usuario y/o contraseña son incorrectos")
                }
            }
            else{
                alert("Tu usuario y/o contraseña son incorrectos")
            }
        }
    }
}
else{
    username = prompt("Debes crear un usuario")
    password = prompt("Crea una contraseña")
    if (password != ""){
        loginUsername = prompt("Ingresa tu usuario")
        if(loginUsername != ""){
            loginPassword = prompt("Ingresa tu contraseña")
            succesLogin = (username === loginUsername) && (password === loginPassword);
            if(loginPassword != "" && succesLogin){
                alert("Bienvenido")
            }
            else if(loginPassword == ""){
                loginPassword = prompt("Debes ingresar tu contraseña")
                succesLogin = (username === loginUsername) && (password === loginPassword);
                if(succesLogin){
                    alert("Bienvenido")
                }
                else{
                    alert("Tu usuario y/o contraseña son incorrectos")
                }
            }
            else{
                alert("Tu usuario y/o contraseña son incorrectos")
            }
        }
        else{
            loginUsername = prompt("Debes ingresar tu usuario")
            loginPassword = prompt("Ingresa tu contraseña")
            succesLogin = (username === loginUsername) && (password === loginPassword);
            if(loginPassword != "" && succesLogin){
                alert("Bienvenido")
            }
            else if(loginPassword == ""){
                loginPassword = prompt("Debes ingresar tu contraseña")
                succesLogin = (username === loginUsername) && (password === loginPassword);
                if(succesLogin){
                    alert("Bienvenido")
                }
                else{
                    alert("Tu usuario y/o contraseña son incorrectos")
                }
            }
            else{
                alert("Tu usuario y/o contraseña son incorrectos")
            }
        }
    }
    else{
        password = prompt("Debes crear una contraseña")
        loginUsername = prompt("Ingresa tu usuario")
        if(loginUsername != ""){
            loginPassword = prompt("Ingresa tu contraseña")
            succesLogin = (username === loginUsername) && (password === loginPassword);
            if(loginPassword != "" && succesLogin){
                alert("Bienvenido")
            }
            else if(loginPassword == ""){
                loginPassword = prompt("Debes ingresar tu contraseña")
                succesLogin = (username === loginUsername) && (password === loginPassword);
                if(succesLogin){
                    alert("Bienvenido")
                }
                else{
                    alert("Tu usuario y/o contraseña son incorrectos")
                }
            }
            else{
                alert("Tu usuario y/o contraseña son incorrectos")
            }
        }
        else{
            loginUsername = prompt("Debes ingresar tu usuario")
            loginPassword = prompt("Ingresa tu contraseña")
            succesLogin = (username === loginUsername) && (password === loginPassword);
            if(loginPassword != "" && succesLogin){
                alert("Bienvenido")
            }
            else if(loginPassword == ""){
                loginPassword = prompt("Debes ingresar tu contraseña")
                succesLogin = (username === loginUsername) && (password === loginPassword);
                if(succesLogin){
                    alert("Bienvenido")
                }
                else{
                    alert("Tu usuario y/o contraseña son incorrectos")
                }
            }
            else{
                alert("Tu usuario y/o contraseña son incorrectos")
            }
        }
    }
}