const nombreExpre = /^[a-zA-Z]+$/;
const emailexpre = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

$(document).ready(function () {
    $("#form_registro").submit(function (event) {
        event.preventDefault();
        var nombre = $("#nombre").val();
        var correo = $("#correo").val();
        var contraseña = $("#password").val();
        var confirmar = $("#confirmar_contra").val();

        if (nombreExpre.test(nombre)) {
            $("#p_nombre").text("");
            if (emailexpre.test(correo)) {
                $("#p_correo").text("");
                if (contraseña.length >= 8) {
                    $("#p_password").text("");
                    if (contraseña !== confirmar) {
                        $("#p_confirmar").text("Las contraseñas no coinciden");
                    } else {
                        $("#p_confirmar").text("");
                        alert("Enviando formulario...")
                        $(this).unbind('submit').submit(); // Enviar formulario.
                    }
                } else {
                    $("#p_password").text("La contraseña debe tener al menos 8 caracteres");
                }
            } else {
                $("#p_correo").text("Ingrese un correo valido");
            }
        } else {
            $("#p_nombre").text("Ingrese el nombre, este debe contener solo letras");
        }
    });
});
