const d = document;
const $form = d.querySelector("#register-form");
const $nameInput = d.querySelector("#name");
const $nameError = d.querySelector("#name-error");
const $emailInput = d.querySelector("#email");
const $emailError = d.querySelector("#email-error");
const $passwordInput = d.querySelector("#password");
const $passwordError = d.querySelector("#password-error");
const $confirmPasswordInput = d.querySelector("#confirm-password");
const $confirmPasswordError = d.querySelector("#confirm-password-error");
const $successMessage = d.querySelector("#success-message");
const $errorsMessages = d.querySelectorAll(".error");
const $loader = d.querySelector("#loader");
const $mensajeExito = d.querySelector("#mensaje-exito");


// Función de Validación del Formulario
function validateForm(e) {
    // Reiniciar mensajes de error y éxito
    $errorsMessages.forEach((el) => {
        el.innerText = "";
    });
    $successMessage.innerText = "";

    let isValid = true;

    //Validar Nombre
    const namePattern = /^[a-zA-Z\s]+$/;
    if ($nameInput.value.trim() === "") {
        $nameError.innerText = "El nombre es obligatorio";
        isValid = false;
    } else if (!namePattern.test($nameInput.value.trim())) {
        $nameError.innerText = "El formato del nombe es incorrecto";
        isValid = false;
    }

    //Validar Email
    let emailPattern = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if ($emailInput.value.trim() === "") {
        $emailError.innerText = "El email es obligatorio";
        isValid = false;
    } else if (!emailPattern.test($emailInput.value.trim())) {
        $emailError.innerText = "El formato del correo no es válido";
        isValid = false;
    }

    //Validar Password
    let passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if ($passwordInput.value.trim() === "") {
        $passwordError.innerText = "La contraseña es obligatorio";
        isValid = false;
    } else if (!passwordPattern.test($passwordInput.value.trim())) {
        $passwordError.innerText = "La contraseña debe de llevar al menos 1 minúscula, 1 mayúscula, 1 número y 1 carácter especial";
        isValid = false;
    }

    //Validar Confirmar Password
    if ($confirmPasswordInput.value.trim() !== $passwordInput.value.trim()) {
        $confirmPasswordError.innerText = "Las contraseñas no coinciden";
        isValid = false;
    }

    if (!isValid) {
        // Prevenir el envío del formulario si hay errores
        e.preventDefault();
    } else {
        e.preventDefault();
        
        // Mostrar el loader
        $loader.classList.remove("hidden");

        // Simular proceso de envío con un timeout
        setTimeout(function () {
            // Ocultar loader
            $loader.classList.add("hidden");

            // Mostrar mensaje de éxito
            $mensajeExito.classList.remove("hidden");
            $mensajeExito.classList.add("show");

            // Ocultar el mensaje de éxito después de 5 segundos
            setTimeout(function () {
                $mensajeExito.classList.remove("show");
                $mensajeExito.classList.add("hide");

                setTimeout(function () {
                    $mensajeExito.classList.add("hidden");
                    $mensajeExito.classList.remove("hide");
                }, 500);
            }, 5000);

            // Resetear el formulario
            $form.reset();
        }, 5000);
    }
}

// Escuchar el evento submit del formulario
$form.addEventListener("submit", validateForm);