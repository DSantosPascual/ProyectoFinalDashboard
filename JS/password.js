document.getElementById("generate-password").addEventListener("click", () => {
    const longitud = parseInt(document.getElementById("password-length").value);
    const salida = document.getElementById("password");
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()-_=+";
    const todoJunto = mayusculas + minusculas + numeros + simbolos;

    let contraseña = [
        mayusculas[Math.floor(Math.random() * mayusculas.length)],
        minusculas[Math.floor(Math.random() * minusculas.length)],
        numeros[Math.floor(Math.random() * numeros.length)],
        simbolos[Math.floor(Math.random() * simbolos.length)]
    ];

    for (let i = contraseña.length; i < longitud; i++) {
        contraseña.push(todoJunto[Math.floor(Math.random() * todoJunto.length)]);
    }

    contraseña = contraseña.sort(() => Math.random() - 0.5).join("");
    salida.textContent = contraseña;

    if (isNaN(longitud) || longitud < 12 || longitud > 50) {
        salida.textContent = "Por favor, elige una longitud válida (entre 12 y 50).";
        return;
    }
});

