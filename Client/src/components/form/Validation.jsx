
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(userData) {
    let errors = {}
    if (!regexEmail.test(userData.email)) {
        errors.email = "Debe ser un correo electrónico"
    }
    if (!userData.email) {
        errors.email = "No puede estar vacio"
    }
    if (userData.email.length > 35) {
        errors.email = "No puede tener mas de 35 caracteres"
    }
    if (userData.password.length <= 6 || userData.password.length > 10) {
        errors.password = "La contraseña debe tener entre 6 a 10 caracateres"
    }
    if (!/\d/.test(userData.password)) {
        errors.password = "La contraseña debe tener almenos un numero"
    }

    return errors
}

