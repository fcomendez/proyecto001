const nombreExpre = /^[a-zA-Z]+$/;
const emailexpre = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

$(document).ready(function () {
    $("#registrarse").click(function (e) {
        var nombre = $("#nombre").val();
        var correo = $("#correo").val();
        var contraseña = $("#password").val();
        var confirmar = $("#confirmar_contra").val();

        if (nombreExpre.test(nombre)) {
            if (emailexpre.test(correo)) {
                if (contraseña.length >= 8) {
                    if (contraseña !== confirmar) {
                        alert("Error, deben coincidir")
                        return
                    } else {
                        alert("Contraseñas validas")
                        $("#form_registro").submit(function() {
                            $(this).submit();
                        });
                    }
                } else {
                    alert("debe ser mayor a 8 caracteres")
                    return
                }
            } else {
                alert("Email inválido");
                return
            }
        } else {
            alert("Ingrese nombre correctamente")
            return
        }
    });
});